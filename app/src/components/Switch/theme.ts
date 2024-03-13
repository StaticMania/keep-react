import { KeepSizes } from '../../Keep/KeepTheme'

export interface ToggleSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export interface keepToggleTheme {
  base: string
  circleBase: string
  enabledBg: {
    on: {
      primary: string
      slate: string
    }
    off: string
  }
  enabledCircle: {
    on: ToggleSizes
    off: ToggleSizes
  }
  disabled: string
  size: ToggleSizes
  label: ToggleSizes
  withIconBase: string
}

export const switchTheme: keepToggleTheme = {
  base: 'relative inline-flex items-center rounded-full',
  circleBase:
    'relative pointer-events-none inline-block transform rounded-full bg-white shadow-large ring-0 transition duration-200 ease-in-out',
  enabledBg: {
    on: {
      primary: 'bg-primary-500',
      slate: 'bg-metal-800',
    },
    off: 'bg-metal-200',
  },
  enabledCircle: {
    on: {
      sm: 'h-4 w-4 translate-x-[18px]',
      md: 'h-5 w-5 translate-x-[22px]',
      lg: 'h-[22px] w-[22px] translate-x-[26px]',
    },
    off: {
      sm: 'h-4 w-4 translate-x-[2px]',
      md: 'h-5 w-5 translate-x-[2px]',
      lg: 'h-[22px] w-[22px] translate-x-[2px]',
    },
  },
  disabled: 'cursor-not-allowed opacity-50',
  size: {
    sm: 'h-5 w-9',
    md: 'h-6 w-11',
    lg: 'h-7 w-[50px]',
  },
  label: {
    sm: 'ml-2 text-body-5 text-metal-800 font-medium',
    md: 'ml-2 text-body-4 text-metal-800 font-medium',
    lg: 'ml-2 text-body-3 text-metal-800 font-medium',
  },
  withIconBase:
    "after:content-[''] after:absolute after:-translate-x-2/4 after:top-2/4 after:left-2/4 after:-translate-y-2/4",
}
