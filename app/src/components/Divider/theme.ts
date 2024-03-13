interface DividerThemeInterface {
  withOutChildren: {
    base: string
    color: {
      primary: string
      secondary: string
      success: string
      warning: string
      error: string
    }
    size: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
  }
  withChildren: {
    base: string
    textColor: {
      primary: string
      secondary: string
      success: string
      warning: string
      error: string
    }
    size: {
      start: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
      center: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
      end: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
    }
    color: {
      start: {
        primary: string
        secondary: string
        success: string
        warning: string
        error: string
      }
      center: {
        primary: string
        secondary: string
        success: string
        warning: string
        error: string
      }
      end: {
        primary: string
        secondary: string
        success: string
        warning: string
        error: string
      }
    }
    variant: {
      start: string
      end: string
      center: string
    }
  }
}

export const dividerTheme: DividerThemeInterface = {
  withOutChildren: {
    base: 'border-b-0 block',
    color: {
      primary: 'border-t-primary-100',
      secondary: 'border-t-metal-100',
      success: 'border-t-success-100',
      warning: 'border-t-warning-100',
      error: 'border-t-error-100',
    },
    size: {
      sm: 'border-t-[0.5px]',
      md: 'border-t',
      lg: 'border-t-2',
      xl: 'border-t-4',
      '2xl': 'border-t-8',
    },
  },
  withChildren: {
    base: 'flex items-center text-body-4',
    textColor: {
      primary: 'text-primary-500',
      secondary: 'text-metal-500',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
    size: {
      start: {
        sm: 'after:border-t-[0.5px]',
        md: 'after:border-t',
        lg: 'after:border-t-2',
        xl: 'after:border-t-4',
        '2xl': 'after:border-t-8',
      },
      center: {
        sm: 'before:border-t-[0.5px] after:border-t-[0.5px]',
        md: 'before:border-t after:border-t',
        lg: 'before:border-t-2 after:border-t-2',
        xl: 'before:border-t-4 after:border-t-4',
        '2xl': 'before:border-t-8 after:border-t-8',
      },
      end: {
        sm: 'before:border-t-[0.5px]',
        md: 'before:border-t',
        lg: 'before:border-t-2',
        xl: 'before:border-t-4',
        '2xl': 'before:border-t-8',
      },
    },
    color: {
      start: {
        primary: 'after:border-primary-100',
        secondary: 'after:border-metal-100',
        success: 'after:border-success-100',
        warning: 'after:border-warning-100',
        error: 'after:border-error-100',
      },
      center: {
        primary: 'before:border-primary-100 after:border-primary-100',
        secondary: 'before:border-metal-100 after:border-metal-100',
        success: 'before:border-success-100 after:border-success-100',
        warning: 'before:border-warning-100 after:border-warning-100',
        error: 'before:border-error-100 after:border-error-100',
      },
      end: {
        primary: 'before:border-primary-100',
        secondary: 'before:border-metal-100',
        success: 'before:border-success-100',
        warning: 'before:border-warning-100',
        error: 'before:border-error-100',
      },
    },
    variant: {
      start: 'after:ms-6 after:flex-[1_1_0%]',
      end: 'before:me-6 before:flex-[1_1_0%]',
      center: 'before:me-6 before:flex-[1_1_0%] after:ms-6 after:flex-[1_1_0%]',
    },
  },
}
