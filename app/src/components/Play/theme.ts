interface PlayTheme {
  base: string
  size: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
  color: {
    primary: string
    secondary: string
    success: string
    warning: string
    error: string
  }
  iconSize: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
  player: string
  dismiss: string
  frame: string
  shadow: string
}

export const playTheme: PlayTheme = {
  base: 'flex items-center justify-center rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:focus:scale-95',
  size: {
    sm: 'h-11 w-11',
    md: 'h-14 w-14',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20',
    '2xl': 'h-24 w-24',
  },
  color: {
    primary:
      'bg-primary-500 hover:bg-primary-600 text-white focus-visible:ring-primary-100 disabled:cursor-not-allowed disabled:bg-primary-100',
    secondary:
      'bg-metal-600 hover:bg-metal-700 text-white focus-visible:ring-metal-200 disabled:cursor-not-allowed disabled:bg-metal-200',
    success:
      'bg-success-500 hover:bg-success-600 text-white focus-visible:ring-success-100 disabled:cursor-not-allowed disabled:bg-success-100',
    warning:
      'bg-warning-500 hover:bg-warning-600 text-white focus-visible:ring-warning-100 disabled:cursor-not-allowed disabled:bg-warning-100',
    error:
      'bg-error-500 hover:bg-error-600 text-white focus-visible:ring-error-100 disabled:cursor-not-allowed disabled:bg-error-100',
  },
  iconSize: {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-5 w-5',
    xl: 'h-8 w-8',
    '2xl': 'h-10 w-10',
  },
  player: 'fixed z-[999] inset-0 flex items-center justify-center top-0',
  frame:
    'relative z-[60] animate-keep-bounce overflow-hidden bg-white md:h-[541px] md:w-[961px] border-4 border-error-500',
  dismiss:
    'absolute right-5 bottom-5 flex items-center justify-center h-10 w-10 z-[60] bg-metal-900 fill-white text-body-4',
  shadow: 'fixed inset-0 z-[55] h-full w-full bg-metal-900/80',
}
