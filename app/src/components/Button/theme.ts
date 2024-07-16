import { cn } from '../../helpers/cn'

export interface ButtonColorVariant {
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
}

export interface ButtonSizeVariant {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

interface keepButtonTheme {
  base: string
  color: ButtonColorVariant
  size: ButtonSizeVariant
  iconBtn: ButtonSizeVariant
  variant: {
    link: ButtonColorVariant
    outline: ButtonColorVariant
  }
  position: {
    start: string
    end: string
    center: string
  }
}

export const buttonTheme: keepButtonTheme = {
  base: 'disabled:pointer-events-none focus-visible:ring-1 focus-visible:ring-metal-100 disabled:opacity-50 transition-all focus-visible:outline-none inline-flex items-center justify-center whitespace-nowrap disabled:cursor-not-allowed capitalize',
  color: {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white disabled:bg-primary-100',
    secondary:
      'bg-metal-900 hover:bg-metal-800 dark:bg-white dark:hover:bg-metal-25 dark:text-metal-900 text-white disabled:bg-metal-200 dark:disabled:bg-metal-600',
    success: 'bg-success-500 hover:bg-success-600 text-white disabled:bg-success-100',
    warning: 'bg-warning-500 hover:bg-warning-600 text-white disabled:bg-warning-100',
    error: 'bg-error-500 hover:bg-error-600 text-white disabled:bg-error-100',
  },
  size: {
    xs: 'text-body-5 px-2 py-1 h-6 font-medium rounded-lg',
    sm: 'text-body-4 px-2.5 py-2 h-9 font-medium rounded-lg',
    md: 'text-body-4 px-4 py-2.5 h-10 font-medium rounded-lg',
    lg: 'text-body-3 px-5 py-3 h-12 font-medium rounded-[10px]',
    xl: 'text-body-2 px-5 py-4 h-14 font-medium rounded-[10px]',
    '2xl': 'text-body-2 px-5 py-[17px] h-[58px] font-medium rounded-xl',
  },
  iconBtn: {
    xs: 'rounded fill-white size-6 !p-1',
    sm: 'rounded fill-white size-8 !p-1.5',
    md: 'rounded fill-white size-9 !p-2',
    lg: 'rounded fill-white size-12 !p-3',
    xl: 'rounded fill-white size-14 !p-[14px]',
    '2xl': 'rounded fill-white w-[58px] h-[58px] !p-[14px]',
  },
  variant: {
    link: {
      primary: 'bg-transparent hover:bg-transparent hover:text-primary-600 text-primary-500 disabled:bg-transparent',
      secondary: 'bg-transparent hover:bg-transparent hover:text-metal-600 text-metal-500 disabled:bg-transparent',
      success: 'bg-transparent hover:bg-transparent hover:text-success-600 text-success-500 disabled:bg-transparent',
      warning: 'bg-transparent hover:bg-transparent hover:text-warning-600 text-warning-500 disabled:bg-transparent',
      error: 'bg-transparent hover:bg-transparent hover:text-error-600 text-error-500 disabled:bg-transparent',
    },
    outline: {
      primary:
        'bg-transparent border border-primary-500 hover:bg-transparent hover:text-primary-600 text-primary-500 disabled:bg-transparent disabled:text-primary-200 disabled:border-primary-100',
      secondary:
        'bg-transparent border border-metal-300 dark:border-metal-800 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-metal-300 dark:text-metal-300 hover:text-metal-500 text-metal-600 disabled:bg-transparent disabled:text-metal-200 disabled:border-metal-200',
      success:
        'bg-transparent border border-success-500 hover:bg-transparent dar:hover:bg-transparent hover:text-success-700 text-success-600 disabled:bg-transparent disabled:text-success-100 disabled:border-success-100',
      warning:
        'bg-transparent border border-warning-600 hover:bg-transparent hover:text-warning-700 text-warning-600 disabled:bg-transparent disabled:text-warning-100 disabled:border-warning-100',
      error:
        'bg-transparent border border-error-500 hover:bg-transparent hover:text-error-700 text-error-600 disabled:bg-transparent disabled:text-error-100 disabled:border-error-100',
    },
  },
  position: {
    start: '!rounded-l-md !rounded-r-none',
    end: '!rounded-r-md !rounded-l-none',
    center: '!rounded-none !border-x-0',
  },
}

type ButtonVariants = (options?: {
  color?: keyof typeof buttonTheme.color
  size?: keyof typeof buttonTheme.size
  variant?: 'link' | 'outline'
  shape?: 'circle' | 'icon'
  position?: 'start' | 'end' | 'center'
}) => string

const buttonVariants: ButtonVariants = ({ size = 'md', color = 'secondary', variant, shape, position } = {}) => {
  const classNames = {
    base: buttonTheme.base,
    size: !shape && buttonTheme.size[size],
    iconBtn: (shape === 'icon' || shape === 'circle') && buttonTheme.iconBtn[size],
    roundedFull: shape === 'circle' && 'rounded-full',
    color: !variant && buttonTheme.color[color],
    link: variant === 'link' && buttonTheme.variant.link[color],
    outline: variant === 'outline' && buttonTheme.variant.outline[color],
    position: position && buttonTheme.position[position],
  }
  return cn(
    classNames.base,
    classNames.size,
    classNames.iconBtn,
    classNames.roundedFull,
    classNames.color,
    classNames.link,
    classNames.outline,
    classNames.position,
  )
}

export { buttonVariants }
