interface keepAlertTheme {
  colorWithBg: {
    primary: string
    secondary: string
    success: string
    warning: string
    error: string
  }
  colorWithOutBg: {
    primary: string
    secondary: string
    success: string
    warning: string
    error: string
  }
  root: {
    base: string
  }
  container: {
    base: string
  }
  description: {
    base: string
  }
  link: {
    base: string
  }
  title: {
    base: string
  }
}

export const alertTheme: keepAlertTheme = {
  colorWithBg: {
    primary: 'text-primary-500 bg-primary-50 border border-primary-200',
    secondary: 'text-metal-900 bg-metal-50 border border-metal-200',
    success: 'text-success-500 bg-success-25 border border-success-200',
    warning: 'text-warning-500 bg-warning-25 border border-warning-200',
    error: 'text-error-500 bg-error-25 border border-error-100',
  },
  colorWithOutBg: {
    primary: 'bg-white text-primary-500 border border-primary-200',
    secondary: 'bg-white text-metal-900 border border-metal-200',
    success: 'bg-white text-success-500 border border-success-200',
    warning: 'bg-white text-warning-500 border border-warning-200',
    error: 'bg-white text-error-500 border border-error-100',
  },
  root: {
    base: 'w-full justify-between gap-2 rounded-xl p-4 shadow-large md:max-w-xl',
  },
  container: {
    base: 'flex flex-1 items-center gap-3',
  },
  description: {
    base: 'hidden w-[234px] text-body-3 font-normal sm:line-clamp-1',
  },
  link: {
    base: 'flex items-center gap-1 text-body-4 font-medium underline underline-offset-2',
  },
  title: {
    base: 'text-body-3 font-semibold',
  },
}
