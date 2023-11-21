// Main structure of the script is adopted from
//   https://gabrieleromanato.name/nodejs-renaming-files-recursively
//
// ==== THE PURPOSE OF THIS SCRIPT ====
// Automatically add `.cjs` extenstion to commonjs files and `.d.cts` extenstion
// to commonjs declaration files. It removes `lib` dir. It then creates and fills
// `lib` by copying and appropriately renaming files from `lib-untouched`. It
// keeps the extensions of esm files intact.
//
// Since tsc can't yet ouput files these extenstions(https://github.com/microsoft/TypeScript/issues/49462),
// this is just a way to do it.
//
// TODO: Optimizie it if it's slow.

'use strict'

import path from 'node:path'
import fs from 'node:fs'

const listDir = (dir, fileList = []) => {
  let files = fs.readdirSync(dir)

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = listDir(path.join(dir, file), fileList)
    } else {
      const pattern = /\.(js|d\.ts|css)$/
      if (pattern.test(file)) {
        let name = file.replace(pattern, (ext) => {
          if (dir.startsWith(`lib-untouched${path.sep}cjs`)) {
            if (ext === '.js') return '.cjs'
            if (ext === '.d.ts') return '.d.cts'
          }
          return ext
        })
        let src = path.join(dir, file)
        let newSrc = path.join(dir.replace('lib-untouched', 'lib'), name)
        fileList.push({
          oldSrc: src,
          newSrc: newSrc,
        })
      }
    }
  })

  return fileList
}

let foundFiles = listDir('lib-untouched')
fs.rmSync('lib', { force: true, recursive: true })
foundFiles.forEach((f) => {
  const dir = f.newSrc.slice(0, f.newSrc.lastIndexOf(path.sep))
  fs.mkdirSync(dir, { recursive: true })
  fs.copyFileSync(f.oldSrc, f.newSrc)
})
