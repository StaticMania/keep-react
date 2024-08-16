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
    primary: 'bg-primary-50 border border-primary-200',
    secondary: 'bg-metal-50 border border-metal-200',
    success: 'bg-success-25 border border-success-200',
    warning: 'bg-warning-25 border border-warning-200',
    error: 'bg-error-25 border border-error-100',
  },
  colorWithOutBg: {
    primary: 'bg-white border border-primary-200',
    secondary: 'bg-white border border-metal-200',
    success: 'bg-white border border-success-200',
    warning: 'bg-white border border-warning-200',
    error: 'bg-white border border-error-100',
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
      secondary: 'text-metal-900',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
  },
  link: {
    base: 'flex items-center gap-1 text-body-4 font-medium underline underline-offset-2',
    color: {
      primary: 'text-primary-500',
      secondary: 'text-metal-900',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
  },
  title: {
    base: 'text-body-3 font-semibold max-w-max',
    color: {
      primary: 'text-primary-500',
      secondary: 'text-metal-900',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
  },
}
