import { cn } from '../../utils/cn'

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
  size: {
    base: ButtonSizeVariant
    default: ButtonSizeVariant
    radius: string
  }
  iconBtn: ButtonSizeVariant
  variant: {
    link: ButtonColorVariant
    outline: ButtonColorVariant
    softBg: ButtonColorVariant
    default: ButtonColorVariant
  }
  position: {
    start: string
    end: string
    center: string
  }
}

export const buttonTheme: keepButtonTheme = {
  base: 'disabled:pointer-events-none disabled:opacity-50 transition-all focus-visible:outline-none inline-flex items-center justify-center whitespace-nowrap disabled:cursor-not-allowed capitalize',
  size: {
    base: {
      xs: 'text-body-5 px-2 py-1 h-6 font-medium',
      sm: 'text-body-4 px-2.5 py-2 h-9 font-medium',
      md: 'text-body-4 px-4 py-2.5 h-10 font-medium',
      lg: 'text-body-3 px-5 py-3 h-12 font-medium',
      xl: 'text-body-2 px-5 py-4 h-14 font-medium',
      '2xl': 'text-body-2 px-5 py-[17px] h-[58px] font-medium',
    },
    default: {
      xs: 'rounded-lg',
      sm: 'rounded-lg',
      md: 'rounded-lg',
      lg: 'rounded-[10px]',
      xl: 'rounded-[10px]',
      '2xl': 'rounded-xl',
    },
    radius: 'rounded-full',
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
      primary:
        'bg-transparent hover:bg-transparent hover:text-primary-600 text-primary-500 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-primary-100 ring-offset-4 dark:ring-offset-metal-900 dark:focus-visible:ring-primary-500',
      secondary:
        'bg-transparent hover:bg-transparent hover:text-metal-600 text-metal-500 disabled:bg-transparent dark:disabled:text-white focus-visible:ring-2 focus-visible:ring-metal-200 ring-offset-4 dark:ring-offset-metal-900',
      success:
        'bg-transparent hover:bg-transparent hover:text-success-600 text-success-500 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-success-100 ring-offset-4 dark:ring-offset-metal-900',
      warning:
        'bg-transparent hover:bg-transparent hover:text-warning-600 text-warning-500 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-warning-200 ring-offset-4 dark:ring-offset-metal-900',
      error:
        'bg-transparent hover:bg-transparent hover:text-error-600 text-error-500 disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-error-100 ring-offset-4 dark:ring-offset-metal-900',
    },
    outline: {
      primary:
        'bg-transparent border border-primary-500 hover:bg-transparent hover:text-primary-600 text-primary-500 disabled:bg-transparent disabled:text-primary-200 disabled:border-primary-100 focus-visible:ring-2 focus-visible:ring-primary-100 ring-offset-4 dark:ring-offset-metal-900 dark:focus-visible:ring-primary-500',
      secondary:
        'bg-transparent border border-metal-300 dark:border-metal-800 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-metal-300 dark:text-metal-300 hover:text-metal-500 text-metal-600 disabled:bg-transparent disabled:text-metal-200 disabled:border-metal-200 dark:disabled:text-white focus-visible:ring-2 focus-visible:ring-metal-200 ring-offset-4 dark:ring-offset-metal-900',
      success:
        'bg-transparent border border-success-500 hover:bg-transparent dar:hover:bg-transparent hover:text-success-700 text-success-600 disabled:bg-transparent disabled:text-success-100 disabled:border-success-100 focus-visible:ring-2 focus-visible:ring-success-100 ring-offset-4 dark:ring-offset-metal-900',
      warning:
        'bg-transparent border border-warning-600 hover:bg-transparent hover:text-warning-700 text-warning-600 disabled:bg-transparent disabled:text-warning-100 disabled:border-warning-100 focus-visible:ring-2 focus-visible:ring-warning-200 ring-offset-4 dark:ring-offset-metal-900',
      error:
        'bg-transparent border border-error-500 hover:bg-transparent hover:text-error-700 text-error-600 disabled:bg-transparent disabled:text-error-100 disabled:border-error-100 focus-visible:ring-2 focus-visible:ring-error-100 ring-offset-4 dark:ring-offset-metal-900',
    },
    softBg: {
      primary:
        'hover:bg-primary-100/30 bg-primary-50 dark:bg-primary-800 dark:text-white dark:hover:bg-primary-800 hover:text-primary-600 text-primary-500 disabled:bg-primary-50 disabled:text-primary-200 focus-visible:ring-2 focus-visible:ring-primary-100 dark:hover:text-white ring-offset-4 dark:ring-offset-metal-900 dark:focus-visible:ring-primary-500',
      secondary:
        'hover:bg-metal-100 dark:hover:bg-metal-800 dark:hover:text-metal-100 bg-metal-50 dark:bg-metal-700 dark:text-metal-50 hover:text-metal-900 text-metal-600 disabled:bg-metal-100 disabled:text-metal-600 dark:disabled:bg-metal-800 dark:disabled:text-metal-300 disabled:cursor-not-allowed dark:disabled:text-white focus-visible:ring-2 focus-visible:ring-metal-200 ring-offset-4 dark:ring-offset-metal-900',
      success:
        'hover:bg-success-100/50 bg-success-50 dark:bg-success-900 dark:text-success-100 dark:hover:bg-success-900 dark:hover:text-success-200 hover:text-success-900 text-success-600 disabled:bg-success-100 disabled:text-success-600 dark:disabled:bg-success-800 dark:disabled:text-success-200 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-success-100 ring-offset-4 dark:ring-offset-metal-900',
      warning:
        'hover:bg-warning-100/50 bg-warning-50 hover:text-warning-900 text-warning-600 disabled:bg-warning-100 disabled:text-warning-600 dark:bg-warning-900 dark:text-warning-100 dark:hover:bg-warning-900 dark:hover:text-warning-200 dark:disabled:bg-warning-900 dark:disabled:text-warning-200 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-warning-200 ring-offset-4 dark:ring-offset-metal-900',
      error:
        'hover:bg-error-100/50 bg-error-50 hover:text-error-900 text-error-600 disabled:bg-error-50 disabled:text-error-200 dark:bg-error-900 dark:text-error-100 dark:hover:bg-error-900 dark:hover:text-error-200 dark:disabled:bg-error-800 dark:disabled:text-error-200 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-error-100 ring-offset-4 dark:ring-offset-metal-900',
    },
    default: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-white disabled:bg-primary-100 focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-4 dark:ring-offset-metal-900 dark:focus-visible:ring-primary-500',
      secondary:
        'bg-metal-900 hover:bg-metal-800 dark:bg-white dark:hover:bg-metal-25 dark:text-metal-900 text-white disabled:bg-metal-600 dark:disabled:bg-metal-600 dark:disabled:text-white focus-visible:ring-2 focus-visible:ring-metal-200 ring-offset-4 dark:ring-offset-metal-900',
      success:
        'bg-success-500 hover:bg-success-600 text-white disabled:bg-success-100 focus-visible:ring-2 focus-visible:ring-success-100 ring-offset-4 dark:ring-offset-metal-900',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-white disabled:bg-warning-100 focus-visible:ring-2 focus-visible:ring-warning-200 ring-offset-4 dark:ring-offset-metal-900',
      error:
        'bg-error-500 hover:bg-error-600 text-white disabled:bg-error-100 focus-visible:ring-2 focus-visible:ring-error-100 ring-offset-4 dark:ring-offset-metal-900',
    },
  },
  position: {
    start: '!rounded-l-md !rounded-r-none',
    end: '!rounded-r-md !rounded-l-none',
    center: '!rounded-none !border-x-0',
  },
}

type ButtonVariants = (options?: {
  color?: keyof ButtonColorVariant
  size?: keyof ButtonSizeVariant
  variant?: 'link' | 'outline' | 'softBg' | 'default' | 'rounded'
  shape?: 'circle' | 'icon'
  position?: 'start' | 'end' | 'center'
  radius?: 'default' | 'full'
}) => string

const buttonVariants: ButtonVariants = ({
  size = 'md',
  color = 'primary',
  variant = 'default',
  radius = 'default',
  shape,
  position,
} = {}) => {
  return cn(
    buttonTheme.base,
    !shape && buttonTheme.size.base[size],
    !shape && radius !== 'full' && buttonTheme.size.default[size],
    !shape && radius === 'full' && buttonTheme.size.radius,
    shape && buttonTheme.iconBtn[size],
    shape === 'circle' && 'rounded-full',
    variant !== 'default' && buttonTheme.variant[variant as keyof typeof buttonTheme.variant]?.[color],
    variant === 'default' && buttonTheme.variant.default[color],
    position && buttonTheme.position[position],
  )
}

export { buttonVariants }
