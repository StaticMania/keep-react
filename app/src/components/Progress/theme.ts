export interface ProgressThemeInterface {
  circle: {
    root: string
    svg: {
      base: string
      circle: string
      g: string
      gCircle: string
    }
    text: {
      base: string
      content: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
    }
    size: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
  }
  line: {
    root: string
    progress: {
      base: string
      bar: string
    }
    text: {
      base: string
      content: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
    }
    size: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
  }
}

export const progressTheme: ProgressThemeInterface = {
  circle: {
    root: 'relative',
    svg: {
      base: 'h-full w-full',
      circle: 'stroke-current text-primary-50',
      g: 'origin-center -rotate-90 transform',
      gCircle: 'stroke-current text-primary-500 transition-all duration-300',
    },
    text: {
      base: 'absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform',
      content: {
        sm: 'text-body-6 font-normal text-primary-500',
        md: 'text-body-4 font-normal text-primary-500',
        lg: 'text-body-3 font-medium text-primary-500',
        xl: 'text-body-2 font-semibold text-primary-500',
        '2xl': 'text-description-2 font-semibold text-primary-500',
      },
    },
    size: {
      sm: 'w-10 h-10',
      md: 'w-20 h-20',
      lg: 'w-24 h-24',
      xl: 'w-32 h-32',
      '2xl': 'w-40 h-40',
    },
  },
  line: {
    root: 'flex items-center gap-x-3 whitespace-nowrap',
    progress: {
      base: 'relative flex w-full overflow-hidden rounded-full bg-primary-50',
      bar: 'relative flex flex-col justify-center overflow-hidden rounded-full bg-gradient-17 transition-all duration-300',
    },
    text: {
      base: 'w-10 text-end',
      content: {
        sm: 'text-body-6 font-normal text-primary-500',
        md: 'text-body-4 font-normal text-primary-500',
        lg: 'text-body-3 font-medium text-primary-500',
        xl: 'text-body-2 font-semibold text-primary-500',
        '2xl': 'text-description-2 font-semibold text-primary-500',
      },
    },
    size: {
      sm: 'h-1',
      md: 'h-2.5',
      lg: 'h-3',
      xl: 'h-4',
      '2xl': 'h-5',
    },
  },
}
