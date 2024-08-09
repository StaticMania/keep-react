const twCssForReact = {
  'src/index.css': `
  @import "keep-react/css";
@tailwind base;
@tailwind components;
@tailwind utilities;
  `,
}
const twCssForNext = {
  'app/globals.css': `
  @import "keep-react/css";
@tailwind base;
@tailwind components;
@tailwind utilities;
  `,
}
const importInReact = {
  'src/App.tsx': `
  import { Button } from "keep-react";
  
const App = () => {
  return (
    <Button>Keep React</Button>
  )
}

export default App;
  `,
}
const importInNext = {
  'app/page.tsx': `
  import { Button } from "keep-react";

const page = () => {
  return (
    <Button>Keep React</Button>
  )
}
    
export default page;
  `,
}
const twNpmInstall = {
  'Install-Tailwind-CSS': 'npm i autoprefixer postcss tailwindcss\nnpx tailwindcss init -p',
}
const keepInstall = {
  npm: 'npm i keep-react phosphor-react',
  yarn: 'yarn add keep-react phosphor-react',
  pnpm: 'pnpm add keep-react phosphor-react',
}
const viteReact = {
  'Vite-React': `
npm create vite@latest my-project -- --template react
cd my-project
`,
}
const nextJsInstall = {
  'Create-NextJS-Project': `npx create-next-app@latest`,
}
const twConfigForReact = {
  'tailwind.config.js': `
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
}

export default keepTheme(config);
`,
  'tailwind.config.ts': `
  import type { Config } from 'tailwindcss'
import { keepTheme } from "keep-react/keepTheme";

const config : Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {},
}

export default keepTheme(config);
  `,
}
const twConfigForNextJS = {
  'tailwind.config.js': `
import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
};

export default keepTheme(config);
`,
  'tailwind.config.ts': `
  import type { Config } from 'tailwindcss'
import { keepTheme } from "keep-react/keepTheme";

const config : Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
};

export default keepTheme(config);
  `,
}

export {
  importInNext,
  importInReact,
  keepInstall,
  nextJsInstall,
  twConfigForNextJS,
  twConfigForReact,
  twCssForNext,
  twCssForReact,
  twNpmInstall,
  viteReact,
}
