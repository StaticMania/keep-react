/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './mdx-components.tsx',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('./src/theme/keep-preset.ts')],
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
        '4k': '1980px',
      }, 
      
    },

    
  },
  plugins: [],
}
