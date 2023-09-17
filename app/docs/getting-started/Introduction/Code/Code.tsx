const twConfig = `
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("keep-react/lib/cjs/theme/keep-preset.js")],
    theme: {
      extend: {},
    },
    plugins: [],
  };
`;
const twCss = `
  @import "keep-react/lib/cjs/theme/globals.min.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
  `;
const CodeString = `
  import { Button } from "keep-react";
  const App=()=>{
    return (
      <Button size="md">Default</Button>
    )
  }
export default App;
  `;
const twNpmInstall =
  "npm i autoprefixer postcss tailwindcss\nnpx tailwindcss init -p";

const keepNpmInstall = "npm i keep-react \n//OR\nyarn add keep-react";

const twConfigForNextJs = `
    module.exports = {
      content: [
        "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      presets: [require("keep-react/lib/cjs/theme/keep-preset.js")],
      theme: {},
      plugins: [],
    };

`;
export {
  twConfig,
  twCss,
  CodeString,
  twNpmInstall,
  keepNpmInstall,
  twConfigForNextJs,
};
