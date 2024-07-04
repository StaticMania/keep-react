export type ProgressSizeVariant = {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

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
      content: ProgressSizeVariant
    }
    size: ProgressSizeVariant
  }
  line: {
    root: string
    progress: {
      base: string
      bar: string
    }
    text: {
      base: string
      content: ProgressSizeVariant
    }
    size: ProgressSizeVariant
  }
}

export const progressTheme: ProgressThemeInterface = {
  circle: {
    root: 'relative',
    svg: {
      base: 'h-full w-full',
      circle: 'stroke-current text-metal-50',
      g: 'origin-center -rotate-90 transform',
      gCircle: 'stroke-current text-metal-900 transition-all duration-300',
    },
    text: {
      base: 'absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform',
      content: {
        sm: 'text-body-5 font-normal text-metal-600',
        md: 'text-body-4 font-normal text-metal-600',
        lg: 'text-body-3 font-medium text-metal-600',
        xl: 'text-body-2 font-semibold text-metal-600',
        '2xl': 'text-heading-6 font-semibold text-metal-600',
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
      base: 'relative flex w-full overflow-hidden rounded-full bg-metal-50 ',
      bar: 'relative flex flex-col justify-center overflow-hidden m-[1px] rounded-full bg-metal-900 transition-all duration-300',
    },
    text: {
      base: 'w-10 text-end',
      content: {
        sm: 'text-body-5 font-normal text-metal-600',
        md: 'text-body-4 font-normal text-metal-600',
        lg: 'text-body-3 font-medium text-metal-600',
        xl: 'text-body-2 font-semibold text-metal-600',
        '2xl': 'text-heading-6 font-semibold text-metal-600',
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
