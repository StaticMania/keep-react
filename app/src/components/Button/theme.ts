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
  base: 'active:focus:scale-95 duration-150 transition-all rounded-lg flex items-center justify-center  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  color: {
    primary:
      'bg-primary-500 hover:bg-primary-600 text-white focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:bg-primary-100',
    secondary:
      'bg-metal-600 hover:bg-metal-700 dark:bg-metal-25 dark:hover:bg-metal-50 dark:text-metal-900 text-white focus-visible:ring-metal-200 disabled:cursor-not-allowed disabled:bg-metal-200 dark:disabled:bg-metal-600',
    success:
      'bg-success-500 hover:bg-success-600 text-white focus-visible:ring-success-100 disabled:cursor-not-allowed disabled:bg-success-100',
    warning:
      'bg-warning-500 hover:bg-warning-600 text-white focus-visible:ring-warning-100 disabled:cursor-not-allowed disabled:bg-warning-100',
    error:
      'bg-error-500 hover:bg-error-600 text-white focus-visible:ring-error-100 disabled:cursor-not-allowed disabled:bg-error-100',
  },
  size: {
    xs: 'text-body-4 px-[14px] py-2 font-medium rounded-lg',
    sm: 'text-body-4 px-5 py-2.5 font-medium',
    md: 'text-body-3 px-6 py-3 font-medium',
    lg: 'text-body-2 px-6 py-4 font-medium',
    xl: 'text-body-2 px-6 py-[17px] font-medium',
    '2xl': 'text-body-1 px-6 py-[18px] font-medium',
  },
  iconBtn: {
    xs: 'h-6 w-6',
    sm: 'h-9 w-9',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-14 w-14',
    '2xl': 'h-[58px] w-[58px]',
  },
  variant: {
    link: {
      primary:
        'bg-transparent hover:bg-transparent hover:text-primary-600 text-primary-500 focus-visible:ring-info-100 disabled:cursor-not-allowed disabled:bg-transparent',
      secondary:
        'bg-transparent hover:bg-transparent hover:text-metal-600 text-metal-500 focus-visible:ring-metal-200 disabled:cursor-not-allowed disabled:bg-transparent',
      success:
        'bg-transparent hover:bg-transparent hover:text-success-600 text-success-500 focus-visible:ring-success-100 disabled:cursor-not-allowed disabled:bg-transparent',
      warning:
        'bg-transparent hover:bg-transparent hover:text-warning-600 text-warning-500 focus-visible:ring-warning-100 disabled:cursor-not-allowed disabled:bg-transparent',
      error:
        'bg-transparent hover:bg-transparent hover:text-error-600 text-error-500 focus-visible:ring-error-100 disabled:cursor-not-allowed disabled:bg-transparent',
    },
    outline: {
      primary:
        'bg-transparent border border-primary-500 hover:bg-transparent hover:text-primary-600 text-primary-500 focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-primary-200 disabled:border-primary-100',
      secondary:
        'bg-transparent border border-metal-300 dark:border-metal-800 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-metal-300 dark:text-metal-300 hover:text-metal-500 text-metal-600 focus-visible:ring-metal-100 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-metal-200 disabled:border-metal-200',
      success:
        'bg-transparent border border-success-500 hover:bg-transparent dar:hover:bg-transparent hover:text-success-700 text-success-600 focus-visible:ring-success-100 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-success-100 disabled:border-success-100',
      warning:
        'bg-transparent border border-warning-600 hover:bg-transparent hover:text-warning-700 text-warning-600 focus-visible:ring-warning-200 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-warning-100 disabled:border-warning-100',
      error:
        'bg-transparent border border-error-500 hover:bg-transparent hover:text-error-700 text-error-600 focus-visible:ring-error-200 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-error-100 disabled:border-error-100',
    },
  },
  position: {
    start: '!rounded-l-md !rounded-r-none',
    end: '!rounded-r-md !rounded-l-none',
    center: '!rounded-none !border-x-0',
  },
}
