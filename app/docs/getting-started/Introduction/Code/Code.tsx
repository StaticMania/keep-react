const twConfig = `
import keepPreset from "keep-react/src/keep-preset.js";
export default {
  content: ["node_modules/keep-react/**/*.{js,jsx,ts,tsx}"],
  presets: [keepPreset],
};
`
const twCss = `
  @import "keep-react/src/main.min.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
  `
const reactCodeString = `
  import { Button } from "keep-react";
  const App=()=>{
    return (
      <Button size="md">Default</Button>
    )
  }
export default App;
  `

const nextCodeString = `
"use client";
import { Button } from "keep-react";
const App=()=>{
  return (
    <Button size="md">Default</Button>
  )
};
export default App;
  `
const twNpmInstall = 'npm i autoprefixer postcss tailwindcss\nnpx tailwindcss init -p'

const keepNpmInstall = 'npm i keep-react'
const keepYarnInstall = 'yarn add keep-react'

const twConfigForNextJs = `
module.exports = {
    content: ["node_modules/keep-react/**/*.{js,jsx,ts,tsx}"],
    presets: [require("keep-react/src/keep-preset.js")],
};
`
export {
  twConfig,
  twCss,
  reactCodeString,
  nextCodeString,
  twNpmInstall,
  keepNpmInstall,
  twConfigForNextJs,
  keepYarnInstall,
}
