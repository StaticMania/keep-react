import type { Config } from 'tailwindcss'
import { keepTheme } from './app/src/theme/keepTheme'

const config: Config = {
  content: [
    './mdx-components.tsx',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '4rem',
        '3xl': '5rem',
      },
    },
    extend: {
      screens: {
        laptop: '1140px',
        '4k': '1980px',
      },
      colors: {
        'bar-bg': 'hsl(var(--fill-bar-bg))',
      },
    },
  },
}

export default keepTheme(config)
