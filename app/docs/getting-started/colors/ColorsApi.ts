export const colors = {
  primary: [
    { id: 25, className: 'bg-primary-25', code: '#f2f5ff' },
    { id: 50, className: 'bg-primary-50', code: '#e8edff' },
    { id: 100, className: 'bg-primary-100', code: '#aebfff' },
    { id: 200, className: 'bg-primary-200', code: '#94abff' },
    { id: 300, className: 'bg-primary-300', code: '#6f8eff' },
    { id: 400, className: 'bg-primary-400', code: '#4a72ff' },
    { id: 500, className: 'bg-primary-500', code: '#1b4dff' },
    { id: 600, className: 'bg-primary-600', code: '#0f3cd9' },
    { id: 700, className: 'bg-primary-700', code: '#042bb2' },
    { id: 800, className: 'bg-primary-800', code: '#042185' },
    { id: 900, className: 'bg-primary-900', code: '#00114a' },
  ],
  success: [
    { id: 25, className: 'bg-success-25 ', code: '#eafef5' },
    { id: 50, className: 'bg-success-50 ', code: '#d7f8e9' },
    { id: 100, className: 'bg-success-100 ', code: '#8fe7b8' },
    { id: 200, className: 'bg-success-200 ', code: '#48d28e' },
    { id: 300, className: 'bg-success-300 ', code: '#2fd181' },
    { id: 400, className: 'bg-success-400 ', code: '#1db469' },
    { id: 500, className: 'bg-success-500 ', code: '#11a75c' },
    { id: 600, className: 'bg-success-600 ', code: '#0a9952' },
    { id: 700, className: 'bg-success-700 ', code: '#048746' },
    { id: 800, className: 'bg-success-800 ', code: '#046a37' },
    { id: 900, className: 'bg-success-900 ', code: '#02542b' },
  ],
  warning: [
    { id: 25, className: 'bg-warning-25 ', code: '#fff9df' },
    { id: 50, className: 'bg-warning-50 ', code: '#fff2c4' },
    { id: 100, className: 'bg-warning-100 ', code: '#ffe99d' },
    { id: 200, className: 'bg-warning-200 ', code: '#f7dc7c' },
    { id: 300, className: 'bg-warning-300 ', code: '#f8d34f' },
    { id: 400, className: 'bg-warning-400 ', code: '#f5c61e' },
    { id: 500, className: 'bg-warning-500 ', code: '#e9b90b' },
    { id: 600, className: 'bg-warning-600 ', code: '#d8a800' },
    { id: 700, className: 'bg-warning-700 ', code: '#b18a00' },
    { id: 800, className: 'bg-warning-800 ', code: '#896b00' },
    { id: 900, className: 'bg-warning-900 ', code: '#624d00' },
  ],
  error: [
    { id: 25, className: 'bg-error-25 ', code: '#fff5f4' },
    { id: 50, className: 'bg-error-50 ', code: '#ffdcda' },
    { id: 100, className: 'bg-error-100 ', code: '#ffc5c1' },
    { id: 200, className: 'bg-error-200 ', code: '#ffa19b' },
    { id: 300, className: 'bg-error-300 ', code: '#ff7a72' },
    { id: 400, className: 'bg-error-400 ', code: '#ff574d' },
    { id: 500, className: 'bg-error-500 ', code: '#ff3838' },
    { id: 600, className: 'bg-error-600 ', code: '#e92215' },
    { id: 700, className: 'bg-error-700 ', code: '#d21a0e' },
    { id: 800, className: 'bg-error-800 ', code: '#be170c' },
    { id: 900, className: 'bg-error-900 ', code: '#ab0a00' },
  ],
  metal: [
    { id: 25, className: 'bg-metal-25 ', code: '#f9fafb' },
    { id: 50, className: 'bg-metal-50 ', code: '#f0f3f9' },
    { id: 100, className: 'bg-metal-100 ', code: '#e9eff6' },
    { id: 200, className: 'bg-metal-200 ', code: '#d7dfe9' },
    { id: 300, className: 'bg-metal-300 ', code: '#afbaca' },
    { id: 400, className: 'bg-metal-400 ', code: '#8897ae' },
    { id: 500, className: 'bg-metal-500 ', code: '#5e718d' },
    { id: 600, className: 'bg-metal-600 ', code: '#455468' },
    { id: 700, className: 'bg-metal-700 ', code: '#3d4a5c' },
    { id: 800, className: 'bg-metal-800 ', code: '#2d3643' },
    { id: 900, className: 'bg-metal-900 ', code: '#1c222b' },
  ],
}

export const customizeColors = {
  'tailwind.config.js': `
import { keepTheme } from "keep-react/keepTheme";

const colorsPalette = {
  metal: {
    25: '...',
    50: '...',
    100: '...',
    200: '...',
    300: '...',
    400: '...',
    500: '...',
    600: '...',
    700: '...',
    800: '...',
    900: '...',
  },
  primary:{
    //... 25 - 900
  },
  secondary:{
    //... 25 - 900
  },
  success:{
    //... 25 - 900
  },
  warning:{
    //... 25 - 900
  },
  error:{
    //... 25 - 900
  },
}


const config = {
  //...config
}

export default keepTheme(config, colorsPalette);
  `,
  'tailwind.config.ts': `
import type { Config } from 'tailwindcss'
import { keepTheme } from "keep-react/keepTheme";

const colorsPalette = {
  metal: {
    25: '...',
    50: '...',
    100: '...',
    200: '...',
    300: '...',
    400: '...',
    500: '...',
    600: '...',
    700: '...',
    800: '...',
    900: '...',
  },
  primary:{
    //... 25 - 900
  },
  secondary:{
    //... 25 - 900
  },
  success:{
    //... 25 - 900
  },
  warning:{
    //... 25 - 900
  },
  error:{
    //... 25 - 900
  },
}


const config : Config = {
  //...config
}

export default keepTheme(config, colorsPalette);
  `,
}

export const forbiddenRoles = {
  'tailwind.config.ts': `
❌ DON'T DO THIS

const colorsPalette = {
  background: {
    25: '...',
  },
}

✔ DO THIS

const colorsPalette = {
  metal: {
    25: 'Your color',
  },
}

✔ DO THIS

import { colors } from 'keep-react/keepTheme'
const colorsPalette = {
  ...colors,
  background: {
    25: 'Your color',
  },
}

  `,
}

export const customizeSingleColor = {
  'tailwind.config.js': `
import { keepTheme, colors } from "keep-react/keepTheme";

const colorsPalette = {
  ...colors,
  metal: {
   ...colors.metal,
   500: '...',
   600: '...',
   700: '...',
   800: '...',
   900: '...',
  }
}


const config = {
  //...config
}

export default keepTheme(config, colorsPalette);
  `,
  'tailwind.config.ts': `
import type { Config } from 'tailwindcss'
import { keepTheme, colors } from "keep-react/keepTheme";

const colorsPalette = {
  ...colors,
  metal: {
   ...colors.metal,
   500: '...',
   600: '...',
   700: '...',
   800: '...',
   900: '...',
  }
}

const config : Config = {
  //...config
}

export default keepTheme(config, colorsPalette);
  `,
}
