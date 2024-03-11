interface AvatarTheme {
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
  shape: {
    circle: string
    rounded: string
  }
  svgIcon: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
  activeIcon: {
    base: string
    color: {
      primary: string
      secondary: string
      success: string
      warning: string
      error: string
    }
    size: {
      rounded: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
      circle: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
    }
  }
  verifyIcon: {
    base: string
    position: {
      circle: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
      rounded: {
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      }
    }
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
  }
}

export const avatarTheme: AvatarTheme = {
  base: 'border',
  color: {
    primary: 'border-primary-200 text-primary-500',
    secondary: 'border-secondary-200 text-secondary-100',
    success: 'border-success-100 text-success-500',
    warning: 'border-warning-100 text-warning-500',
    error: 'border-error-100 text-error-500',
  },
  size: {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
    xl: 'h-14 w-14',
    '2xl': 'h-16 w-16',
  },
  shape: {
    circle: 'rounded-full',
    rounded: 'rounded-md',
  },
  svgIcon: {
    xs: 'h-3 w-3 fill-current',
    sm: 'h-3 w-3 fill-current',
    md: 'h-4 w-4 fill-current',
    lg: 'h-5 w-5 fill-current',
    xl: 'h-6 w-6 fill-current',
    '2xl': 'h-7 w-7 fill-current',
  },
  activeIcon: {
    base: 'before:absolute before:rounded-full before:border before:content-[""]',
    color: {
      primary: 'before:bg-primary-500 before:border-primary-200',
      secondary: 'before:bg-metal-500 before:border-metal-200',
      success: 'before:bg-success-500 before:border-success-200',
      warning: 'before:bg-warning-500 before:border-warning-200',
      error: 'before:bg-error-500 before:border-error-200',
    },
    size: {
      rounded: {
        sm: 'before:bottom-0 before:right-0 before:h-1.5 before:w-1.5',
        md: 'before:bottom-0 before:right-0 before:h-2 before:w-2',
        lg: 'before:bottom-0 before:right-0 before:h-2 before:w-2',
        xl: 'before:bottom-0.5 before:right-0.5 before:h-2 before:w-2',
        '2xl': 'before:bottom-0 before:right-0 before:h-2.5 before:w-2.5',
      },
      circle: {
        sm: 'before:bottom-0 before:right-0 before:h-1.5 before:w-1.5',
        md: 'before:bottom-0 before:right-0 before:h-2 before:w-2',
        lg: 'before:bottom-0.5 before:right-0.5 before:h-2 before:w-2',
        xl: 'before:bottom-1 before:right-1 before:h-2 before:w-2',
        '2xl': 'before:bottom-1 before:right-1 before:h-2.5 before:w-2.5',
      },
    },
  },
  verifyIcon: {
    base: 'absolute',
    position: {
      circle: {
        sm: '-right-1.5 -top-1.5',
        md: '-right-1 -top-1',
        lg: '-right-1 -top-1',
        xl: '-right-0.5 -top-0.5',
        '2xl': '-right-0.5 -top-0.5',
      },
      rounded: {
        sm: '-right-1.5 -top-1.5',
        md: '-right-1.5 -top-1.5 ',
        lg: '-right-2 -top-2',
        xl: '-right-2 -top-2',
        '2xl': '-right-2 -top-2',
      },
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-4 w-4',
      lg: 'h-[18px] w-[18px]',
      xl: 'h-5 w-5',
      '2xl': 'h-6 w-6',
    },
    color: {
      primary: '#1B4DFF',
      secondary: '#2D3643',
      success: '#11A75C',
      warning: '#FFC700',
      error: '#FF3838',
    },
  },
}
