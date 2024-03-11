interface BadgeTheme {
  base: string
  size: {
    sm: string
    md: string
  }
  disabled: string
  variant: {
    base: {
      primary: string
      secondary: string
      success: string
      warning: string
      error: string
    }
    border: {
      primary: string
      secondary: string
      success: string
      warning: string
      error: string
    }
    background: {
      primary: string
      secondary: string
      success: string
      warning: string
      error: string
    }
  }
  icon: {
    base: string
    size: {
      sm: string
      md: string
    }
    color: {
      primary: string
      secondary: string
      success: string
      warning: string
      error: string
    }
  }
}

export const badgeTheme: BadgeTheme = {
  base: 'inline-flex w-fit items-center font-medium rounded-full cursor-pointer',
  size: {
    sm: 'px-1.5 h-4 text-body-5',
    md: 'px-2.5 h-5 text-body-4',
  },
  disabled: 'pointer-events-none cursor-not-allowed select-none bg-metal-300 opacity-30',
  variant: {
    base: {
      primary: 'bg-primary-50 text-primary-500',
      secondary: 'bg-metal-50 text-metal-500',
      success: 'bg-success-50 text-success-500',
      warning: 'bg-warning-50 text-warning-500',
      error: 'bg-error-50 text-error-500',
    },
    border: {
      primary: 'border border-primary-100 bg-primary-50 text-primary-500',
      secondary: 'border border-metal-200 bg-metal-50 text-metal-500',
      success: 'border border-success-100 bg-success-50 text-success-500',
      warning: 'border border-warning-200 bg-warning-50 text-warning-500',
      error: 'border border-error-100 bg-error-50 text-error-500',
    },
    background: {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-metal-500 text-white',
      success: 'bg-success-500 text-white',
      warning: 'bg-warning-500 text-white',
      error: 'bg-error-500 text-white',
    },
  },
  icon: {
    base: 'rounded-full',
    size: {
      sm: 'h-1.5 w-1.5',
      md: 'h-2 w-2',
    },
    color: {
      primary: 'bg-primary-500',
      secondary: 'bg-metal-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
      error: 'bg-error-500',
    },
  },
}
