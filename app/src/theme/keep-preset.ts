module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          25: '#F2F5FF',
          50: '#E8EDFF',
          100: '#B4C4FF',
          200: '#94ABFF',
          300: '#6E8EFF',
          400: '#4A72FF',
          500: '#1B4DFF',
          600: '#0F3CD9',
          700: '#042BB2',
          800: '#042185',
          900: '#00114A',
        },
        success: {
          25: '#F2FFF9',
          50: '#D7FFEB',
          100: '#7DFEB9',
          200: '#44E790',
          300: '#2FD181',
          400: '#1DB469',
          500: '#11A75C',
          600: '#0A9952',
          700: '#048746',
          800: '#046A37',
          900: '#02542B',
        },
        warning: {
          25: '#FFF9DF',
          50: '#FFF2C4',
          100: '#FFE99D',
          200: '#FFE176',
          300: '#FFD84E',
          400: '#FFD027',
          500: '#FFC700',
          600: '#D8A800',
          700: '#B18A00',
          800: '#896B00',
          900: '#624D00',
        },
        error: {
          25: '#FFF5F4',
          50: '#FFDCDA',
          100: '#FFC5C1',
          200: '#FFA19B',
          300: '#FF7A72',
          400: '#FF574D',
          500: '#FF3838',
          600: '#E92215',
          700: '#D21A0E',
          800: '#BE170C',
          900: '#AB0A00',
        },
        metal: {
          25: '#F9FAFB',
          50: '#F0F3F9',
          100: '#E9EFF6',
          200: '#D7DFE9',
          300: '#AFBACA',
          400: '#8897AE',
          500: '#5E718D',
          600: '#455468',
          700: '#3D4A5C',
          800: '#2D3643',
          900: '#1C222B',
        },
      },
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
      },
      animation: {
        'keep-bounce': 'bounce-open 0.1s',
        'keep-slide-up': 'slide-up 0.2s',
        'keep-slide-down': 'slide-down 0.2s',
        'keep-slide-left': 'slide-left 0.2s',
        'keep-slide-right': 'slide-right 0.2s',
      },
      content: {
        img: 'url("/images/avatar/verify.svg")',
      },
    },
  },
}
