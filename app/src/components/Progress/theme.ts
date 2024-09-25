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
  }
  line: {
    root: string
    progress: {
      base: string
      bar: string
    }
    text: {
      base: string
    }
  }
}

export const progressTheme: ProgressThemeInterface = {
  circle: {
    root: 'relative w-32 h-32',
    svg: {
      base: 'h-full w-full',
      circle: 'stroke-primary-25 text-metal-50 fill-white',
      g: 'origin-center -rotate-90 transform',
      gCircle: 'stroke-primary-500 text-primary-500 transition-all duration-300',
    },
  },
  line: {
    root: 'flex items-center gap-x-3 whitespace-nowrap',
    progress: {
      base: 'relative flex w-full overflow-hidden rounded-full bg-primary-25',
      bar: 'relative flex flex-col justify-center overflow-hidden m-[1px] rounded-full bg-primary-500 transition-all duration-300',
    },
    text: {
      base: 'w-10 text-end text-body-4 font-medium text-metal-600',
    },
  },
}
