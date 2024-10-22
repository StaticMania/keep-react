import merge from 'deepmerge'
import type { Config } from 'tailwindcss'

type ColorThemeType = {
  [key: string]: {
    [key: number]: string
  }
}
const colors: ColorThemeType = {
  primary: {
    25: '#f2f5ff',
    50: '#e8edff',
    100: '#aebfff',
    200: '#94abff',
    300: '#6f8eff',
    400: '#4a72ff',
    500: '#1b4dff',
    600: '#0f3cd9',
    700: '#042bb2',
    800: '#042185',
    900: '#00114a',
  },
  success: {
    25: '#eafef5',
    50: '#d7f8e9',
    100: '#8fe7b8',
    200: '#48d28e',
    300: '#2fd181',
    400: '#1db469',
    500: '#11a75c',
    600: '#0a9952',
    700: '#048746',
    800: '#046a37',
    900: '#02542b',
  },
  metal: {
    25: '#f9fafb',
    50: '#f0f3f9',
    100: '#e9eff6',
    200: '#d7dfe9',
    300: '#afbaca',
    400: '#8897ae',
    500: '#5e718d',
    600: '#455468',
    700: '#3d4a5c',
    800: '#2d3643',
    900: '#1c222b',
  },
  error: {
    25: '#fff5f4',
    50: '#ffdcda',
    100: '#ffc5c1',
    200: '#ffa19b',
    300: '#ff7a72',
    400: '#ff574d',
    500: '#ff3838',
    600: '#e92215',
    700: '#d21a0e',
    800: '#be170c',
    900: '#ab0a00',
  },
  warning: {
    25: '#fff9df',
    50: '#fff2c4',
    100: '#ffe99d',
    200: '#f7dc7c',
    300: '#f8d34f',
    400: '#f5c61e',
    500: '#e9b90b',
    600: '#d8a800',
    700: '#b18a00',
    800: '#896b00',
    900: '#624d00',
  },
}

const presetFn = (color: ColorThemeType) => {
  return {
    theme: {
      extend: {
        colors: { ...color },
        fontSize: {
          display: [
            '6rem',
            {
              lineHeight: '6.875rem',
              letterSpacing: '-2.5px',
            },
          ],
          'heading-1': [
            '4rem',
            {
              lineHeight: '4.875rem',
              letterSpacing: '-2.3px',
            },
          ],
          'heading-2': [
            '3.5rem',
            {
              lineHeight: '4.125rem ',
              letterSpacing: '-1.75px',
            },
          ],
          'heading-3': [
            '3rem',
            {
              lineHeight: '3.75rem',
              letterSpacing: '-1.75px',
            },
          ],
          'heading-4': [
            '2.5rem',
            {
              lineHeight: '3rem',
              letterSpacing: '-1.5px',
            },
          ],
          'heading-5': [
            '2rem',
            {
              lineHeight: '2.625rem',
              letterSpacing: '-0.75px',
            },
          ],
          'heading-6': [
            '1.5rem',
            {
              lineHeight: '2.125rem',
              letterSpacing: '-0.4px',
            },
          ],
          'body-1': [
            '1.25rem',
            {
              lineHeight: '1.75rem',
              letterSpacing: '-0.4px',
            },
          ],
          'body-2': [
            '1.125rem',
            {
              lineHeight: '1.5rem',
              letterSpacing: '-0.4px',
            },
          ],
          'body-3': [
            '1rem',
            {
              lineHeight: '1.5rem',
              letterSpacing: '-0.3px',
            },
          ],
          'body-4': [
            '0.875rem',
            {
              lineHeight: '1.375rem',
              letterSpacing: '-0.2px',
            },
          ],
          'body-5': [
            '0.75rem',
            {
              lineHeight: '1.375rem',
              letterSpacing: '-0.2px',
            },
          ],
        },
        boxShadow: {
          small: '0px 1px 2px rgba(45, 54, 67, 0.05)',
          default: '0px 2px 4px rgba(45, 54, 67, 0.08), 0px 1px 2px rgba(45, 54, 67, 0.04)',
          medium: '0px 4px 8px -2px rgba(45, 54, 67, 0.08), 0px 2px 4px -2px rgba(45, 54, 67, 0.06)',
          large: '0px 20px 24px -4px rgba(45, 54, 67, 0.04), 0px 8px 11px -4px rgba(45, 54, 67, 0.04)',
          xLarge: '0px 24px 50px -12px rgba(45, 54, 67, 0.12)',
          '2xLarge': '0px 32px 64px -12px rgba(45, 54, 67, 0.14)',
        },
        content: {
          checkedLight: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/checkedLight_xwegqy.svg")',
          checkedDark: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/checkedDark_g8gcjk.svg")',
          dashedLight: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/dashedLight_whvevx.svg")',
          dashedDark: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/dashedDark_vx3paq.svg")',
        },
        keyframes: {
          zoomIn: {
            '0%': { transform: 'scale(0.5)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' },
          },
          fadeInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(auto)',
            },
          },
          blinkIn: {
            '0%,70%,100%': { opacity: '1' },
            '20%,50%': { opacity: '0' },
          },
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          zoomIn: 'zoomIn 0.3s ease-in-out',
          fadeInUp: 'fadeInUp 0.3s ease-out',
          blinkIn: 'blinkIn 1.25s ease-out infinite',
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        backgroundImage: {
          sun: "url('https://staticmania.cdn.prismic.io/staticmania/Zqc9bB5LeNNTxjUr_sun.svg')",
          moon: "url('https://staticmania.cdn.prismic.io/staticmania/Zqc9ax5LeNNTxjUq_moon.svg')",
        },
      },
    },
  }
}

const keepTheme = (config: Config, color = colors): Config => {
  const twConfigForKeepReact = {
    darkMode: 'selector',
    content: ['node_modules/keep-react/**/*.{js,jsx,ts,tsx}'],
    presets: [presetFn(color)],
    plugins: [require('tailwindcss-animate')],
  }

  return merge(twConfigForKeepReact, { ...config })
}

export { colors, keepTheme }
