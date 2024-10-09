export interface ColorVariant {
  primary: string
  secondary: string
  success: string
  warning: string
  error: string
}
interface keepAlertTheme {
  colorWithBg: ColorVariant
  colorWithOutBg: ColorVariant
  root: {
    base: string
  }
  container: {
    base: string
  }
  description: {
    base: string
    color: ColorVariant
  }
  link: {
    base: string
    color: ColorVariant
  }
  title: {
    base: string
    color: ColorVariant
  }
}

export const alertTheme: keepAlertTheme = {
  colorWithBg: {
    primary: 'bg-primary-50 border border-primary-200 dark:border-primary-800 dark:bg-primary-900/30',
    secondary: 'bg-metal-50 border border-metal-200 dark:border-metal-800 dark:bg-metal-900/30',
    success: 'bg-success-25 border border-success-200 dark:border-success-800 dark:bg-success-900/30',
    warning: 'bg-warning-25 border border-warning-200 dark:border-warning-800 dark:bg-warning-900/30',
    error: 'bg-error-25 border border-error-100 dark:border-error-800 dark:bg-error-900/30',
  },
  colorWithOutBg: {
    primary: 'bg-transparent dark:border-primary-800 border border-primary-200',
    secondary: 'bg-transparent dark:border-metal-800 border border-metal-200',
    success: 'bg-transparent dark:border-success-800 border border-success-200',
    warning: 'bg-transparent dark:border-warning-800 border border-warning-200',
    error: 'bg-transparent dark:border-error-800 border border-error-100',
  },
  root: {
    base: 'w-full justify-between gap-2 rounded-xl p-4 shadow-large relative',
  },
  container: {
    base: 'flex items-center gap-3',
  },
  description: {
    base: 'hidden text-body-3 font-normal md:block',
    color: {
      primary: 'text-primary-500',
      secondary: 'text-metal-600 dark:text-metal-300',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
  },
  link: {
    base: 'flex items-center gap-1 text-body-4 font-medium underline underline-offset-2',
    color: {
      primary: 'text-primary-500',
      secondary: 'text-metal-900 dark:text-white',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
  },
  title: {
    base: 'text-body-3 font-semibold max-w-max',
    color: {
      primary: 'text-primary-500',
      secondary: 'text-metal-900 dark:text-white',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
  },
}
