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
