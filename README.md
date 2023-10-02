# KEEP REACT

![Keep React Logo](https://staticmania.cdn.prismic.io/staticmania/8ab09481-0fe9-4f3e-b795-e825c13e68fd_keepLogo.svg)

Keep React is an open-source component library built on Tailwind CSS and React.js. It provides a versatile set of pre-designed UI components that enable developers to streamline the creation of modern, responsive, and visually appealing web applications.

![Keep React](https://images.prismic.io/staticmania/740a2fc6-2ae3-4d39-8fbb-555451b21738_mobile.png?auto=compress,format)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [Figma](#figma)
- [License](#license)

## Installation

### Vite React Application

After creating a React application with Vite, follow these steps to
install Tailwind CSS:

`Step 1:` Install Tailwind CSS

```
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

`Step 2:` Install Keep React:

```
npm i keep-react
```

Or with Yarn

```
yarn add keep-react
```

`Step 3:` Go to the `tailwind.config.js` file and paste the
following code:

```
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
  }
```

`Step 4:` Add Tailwind CSS to index.css File:

```
@import "keep-react/lib/cjs/theme/main.min.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Next JS Application

You can easily integrate `keep-react` into your Next.js application. Starting from Next.js version 13.4, the app router automatically installs Tailwind CSS, eliminating the need for a separate Tailwind CSS installation. If you have already installed Tailwind CSS as part of the Next.js application setup, you can proceed with Step 2. Otherwise, start with Step 1.

After creating a Next JS application, follow these steps to
install Tailwind CSS:

`Step 1:` Install Tailwind CSS

```
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

`Step 2:` Install Keep React

```
npm i keep-react
```

Or with yarn

```
yarn add keep-react
```

`Step 3:` Go to the `tailwind.config.js` file and paste the
following code

```
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
```

`Step 4:` Add Tailwind CSS to globals.css File:

```
@import "keep-react/lib/cjs/theme/main.min.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Congratulations! You have successfully installed the Keep React. Now you can import any component from keep-react and use it in your project.

## usage

```
import { Button } from "keep-react";
  const App = () => {
    return (
      <Button size="md">Default</Button>
    )
  }
export default App;
```

## Components

The Keep React offers a wide range of components to build your user interfaces. For detailed usage and examples of each component, refer to our [component documentation](https://react.keepdesign.io/docs/getting-started/Introduction).

## Contributing

If you want to contribute to the Keep React, you can follow the [contributing guide](https://github.com/StaticMania/keep-react/blob/master/Contribute.md).

## Figma

If you need access to Figma design files for the components, you can check out our website for more information:

[Get access to the Figma design files](https://keepdesign.io)

## License

The Keep-React name and logos are trademarks of StaticMania.

[Read about the licensing terms](https://github.com/StaticMania/keep-react/blob/master/License)
