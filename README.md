# KEEP REACT

Keep React is an open-source component library built on Tailwind CSS and React.js. It provides a versatile set of pre-designed UI components that enable developers to streamline the creation of modern, responsive, and visually appealing web applications.

![Keep React](https://images.prismic.io/staticmania/468819ab-dcc8-4393-85b2-b93913eee369_For+Github.png?auto=compress,format)

## Table of Contents

- [KEEP REACT](#keep-react)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Vite React Application](#vite-react-application)
    - [Next JS Application](#next-js-application)
  - [usage](#usage)
  - [Components](#components)
  - [Contributing](#contributing)
  - [Figma](#figma)
  - [License](#license)

## Installation

## Vite React Application

Setting Up Keep React in Vite React Application

`Step 1:` Create a Vite React Application

```console
npm create vite@latest my-project -- --template react
cd my-project
```

`Step 2:` Install Tailwind CSS

```console
npm i autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

`Step 3:` Install Keep React:

```console
npm i keep-react phosphor-react
```

Or with Yarn

```console
yarn add keep-react phosphor-react
```

Or with Pnpm

```console
pnpm add keep-react phosphor-react
```

`Step 4:` Go to the `tailwind.config.js` file and paste the
following code:

```jsx
import { keepTheme } from 'keep-react/keepTheme'

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
}

export default keepTheme(config)
```

`Step 5:` Add Tailwind CSS to index.css File:

```css
@import 'keep-react/css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Next JS Application

You can easily integrate `keep-react` into your Next.js application.

`Step 1:` Install Next Js Application

```console
npx create-next-app@latest
```

Ensure that you select `tailwindcss` as a dependency for your application during the setup.

`Would you like to use Tailwind CSS? -- Yes`

`Step 2:` Install Keep React

```console
npm i keep-react phosphor-react
```

Or with Yarn

```console
yarn add keep-react phosphor-react
```

Or with Pnpm

```console
pnpm add keep-react phosphor-react
```

`Step 3:` Go to the `tailwind.config.js` file and paste the
following code

```js
import { keepTheme } from 'keep-react/keepTheme'

const config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
}

export default keepTheme(config)
```

`Step 4:` Add Tailwind CSS to `globals.css` File:

```css
@import 'keep-react/css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Congratulations! You have successfully installed the Keep React. Now you can import any component from keep-react and use it in your project.

## usage

```jsx
import { Button } from 'keep-react'
const App = () => {
  return <Button>Button</Button>
}
export default App
```

## Components

The Keep React offers a wide range of components to build your user interfaces. For detailed usage and examples of each component, refer to our [component documentation](https://react.keepdesign.io/docs/getting-started/installation).

## Contributing

If you want to contribute to the Keep React, you can follow the [contributing guide](https://github.com/StaticMania/keep-react/blob/main/Contribute.md).

## Contributors

This project exists thanks to all the people who contribute:

<a href="https://github.com/StaticMania/keep-react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=StaticMania/keep-react"/>
</a>

## Figma

If you need access to Figma design files for the components, you can check out our website for more information:

[Get access to the Figma design files](https://keepdesign.io)

## License

The Keep-React name and logos are trademarks of StaticMania.

[Read about the licensing terms](https://github.com/StaticMania/keep-react/blob/main/License)
