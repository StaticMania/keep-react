import merge from 'deepmerge'
import type { Config } from 'tailwindcss'
import { colors } from './colors'

type ColorThemeType = {
  [key: string]: {
    [key: number]: string
  }
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
        keyframes: {
          'bounce-open': {
            '0%': { transform: 'scale(0.95)' },
            '100%': {
              transform: 'scale(1)',
            },
          },
          'slide-up': {
            '0%': { opacity: '0', transform: 'translateY(100px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'slide-down': {
            '0%': { opacity: '0', transform: 'translateY(-100px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'slide-left': {
            '0%': { opacity: '0', transform: 'translateX(-100px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          'slide-right': {
            '0%': { opacity: '0', transform: 'translateX(100px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          'slide-right-back': {
            '0%': { opacity: '1', transform: 'translateX(0)' },
            '100%': { opacity: '0', transform: 'translateX(100px)' },
          },
          'slide-left-back': {
            '0%': { opacity: '1', transform: 'translateX(0)' },
            '100%': { opacity: '0', transform: 'translateX(-100px)' },
          },
          'slide-top-back': {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(-100px)' },
          },
          'slide-up-back': {
            '0%': { opacity: '1', transform: 'translateY(0)' },
            '100%': { opacity: '0', transform: 'translateY(100px)' },
          },
        },
        animation: {
          'keep-bounce': 'bounce-open 0.1s',
          'keep-slide-up': 'slide-up 0.4s',
          'keep-slide-down': 'slide-down 0.4s',
          'keep-slide-left': 'slide-left 0.4s',
          'keep-slide-right': 'slide-right 0.4s',
          'keep-slide-right-back': 'slide-right-back 0.4s',
          'keep-slide-left-back': 'slide-left-back 0.4s',
          'keep-slide-top-back': 'slide-top-back 0.4s',
          'keep-slide-up-back': 'slide-up-back 0.4s',
        },
        content: {
          img: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719144077/verify_uaqa85.svg")',
          checkedLight: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/checkedLight_xwegqy.svg")',
          checkedDark: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/checkedDark_g8gcjk.svg")',
          dashedLight: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/dashedLight_whvevx.svg")',
          dashedDark: 'url("https://res.cloudinary.com/arif5577/image/upload/v1719146139/dashedDark_vx3paq.svg")',
        },
      },
    },
  }
}

const keepTheme = (config: Config, color = colors) => {
  const twConfigForKeepReact = {
    darkMode: 'class',
    content: ['node_modules/keep-react/**/*.{js,jsx,ts,tsx}'],
    presets: [presetFn(color)],
  }

  return merge(twConfigForKeepReact, { ...config })
}

export { keepTheme }
