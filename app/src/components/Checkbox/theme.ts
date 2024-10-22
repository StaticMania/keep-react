export interface CheckboxTheme {
  base: string
  variant: {
    rounded: {
      base: string
      color: {
        primary: string
        secondary: string
        success: string
        warning: string
        error: string
      }
    }
    circle: {
      base: string
      color: {
        primary: string
        secondary: string
        success: string
        warning: string
        error: string
      }
    }
    default: {
      base: string
      color: {
        primary: string
        secondary: string
        success: string
        warning: string
        error: string
      }
    }
  }
}

const checkboxTheme: CheckboxTheme = {
  base: 'peer relative h-5 w-5 shrink-0 border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variant: {
    default: {
      base: 'rounded data-[state=checked]:before:rounded-sm ',
      color: {
        primary:
          'border-primary-200 ring-offset-primary-500 focus-visible:ring-primary-500 data-[state=checked]:text-primary-500 dark:border-primary-100 dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:text-primary-500 data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-500 dark:focus-visible:border-primary-500',
        secondary:
          'border-metal-200 ring-offset-metal-900 focus-visible:ring-metal-900 data-[state=checked]:text-metal-500 dark:border-metal-100 dark:ring-offset-metal-500 dark:focus-visible:ring-metal-500 dark:data-[state=checked]:text-metal-500 data-[state=checked]:border-metal-800 data-[state=checked]:bg-metal-900 dark:data-[state=checked]:bg-metal-900 dark:focus-visible:border-metal-800 focus-visible:border-metal-900 dark:data-[state=checked]:border-metal-800',
        success:
          'border-success-200 ring-offset-success-500 focus-visible:ring-success-500 data-[state=checked]:text-success-500 dark:border-success-100 dark:ring-offset-success-500 dark:focus-visible:ring-success-500 dark:data-[state=checked]:text-success-500 data-[state=checked]:border-success-500 data-[state=checked]:bg-success-500 dark:data-[state=checked]:bg-success-500 dark:focus-visible:border-success-500',
        warning:
          'border-warning-200 ring-offset-warning-500 focus-visible:ring-warning-500 data-[state=checked]:text-warning-500 dark:border-warning-100 dark:ring-offset-warning-500 dark:focus-visible:ring-warning-500 dark:data-[state=checked]:text-warning-500 data-[state=checked]:border-warning-500 data-[state=checked]:bg-warning-500 dark:data-[state=checked]:bg-warning-500 dark:focus-visible:border-warning-500',
        error:
          'border-error-200 ring-offset-error-500 focus-visible:ring-error-500 data-[state=checked]:text-error-500 dark:border-error-100 dark:ring-offset-error-500 dark:focus-visible:ring-error-500 dark:focus-visible:border-error-500 dark:data-[state=checked]:text-error-500 data-[state=checked]:border-error-500 data-[state=checked]:bg-error-500 dark:data-[state=checked]:bg-error-500',
      },
    },
    rounded: {
      base: 'rounded data-[state=checked]:before:absolute data-[state=checked]:before:left-1/2 data-[state=checked]:before:top-1/2 data-[state=checked]:before:h-2.5 data-[state=checked]:before:w-2.5 data-[state=checked]:before:-translate-x-1/2 data-[state=checked]:before:-translate-y-1/2 data-[state=checked]:before:rounded-sm data-[state=checked]:before:content-[""]',
      color: {
        primary:
          'border-primary-200 ring-offset-primary-500 focus-visible:ring-primary-500 data-[state=checked]:text-primary-500 dark:border-primary-100 dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:text-primary-500 data-[state=checked]:border-primary-500 data-[state=checked]:before:bg-primary-500 dark:data-[state=checked]:before:bg-primary-500 dark:focus-visible:border-primary-500',
        secondary:
          'border-metal-200 ring-offset-metal-900 focus-visible:ring-metal-900 data-[state=checked]:text-metal-500 dark:border-metal-100 dark:ring-offset-metal-500 dark:focus-visible:ring-metal-500 dark:data-[state=checked]:text-metal-500 data-[state=checked]:border-metal-500 data-[state=checked]:before:bg-metal-900 dark:data-[state=checked]:before:bg-metal-500 dark:focus-visible:border-metal-800 focus-visible:border-metal-900 dark:data-[state=checked]:border-metal-800',
        success:
          'border-success-200 ring-offset-success-500 focus-visible:ring-success-500 data-[state=checked]:text-success-500 dark:border-success-100 dark:ring-offset-success-500 dark:focus-visible:ring-success-500 dark:data-[state=checked]:text-success-500 data-[state=checked]:border-success-500 data-[state=checked]:before:bg-success-500 dark:data-[state=checked]:before:bg-success-500 dark:focus-visible:border-success-500',
        warning:
          'border-warning-200 ring-offset-warning-500 focus-visible:ring-warning-500 data-[state=checked]:text-warning-500 dark:border-warning-100 dark:ring-offset-warning-500 dark:focus-visible:ring-warning-500 dark:data-[state=checked]:text-warning-500 data-[state=checked]:border-warning-500 data-[state=checked]:before:bg-warning-500 dark:data-[state=checked]:before:bg-warning-500 dark:focus-visible:border-warning-500',
        error:
          'border-error-200 ring-offset-error-500 focus-visible:ring-error-500 data-[state=checked]:text-error-500 dark:border-error-100 dark:ring-offset-error-500 dark:focus-visible:ring-error-500 dark:focus-visible:border-error-500 dark:data-[state=checked]:text-error-500 data-[state=checked]:border-error-500 data-[state=checked]:before:bg-error-500 dark:data-[state=checked]:before:bg-error-500',
      },
    },
    circle: {
      base: 'rounded-full data-[state=checked]:before:absolute data-[state=checked]:before:left-1/2 data-[state=checked]:before:top-1/2 data-[state=checked]:before:h-2.5 data-[state=checked]:before:w-2.5 data-[state=checked]:before:-translate-x-1/2 data-[state=checked]:before:-translate-y-1/2 data-[state=checked]:before:rounded-full data-[state=checked]:before:content-[""] ',
      color: {
        primary:
          'border-primary-200 ring-offset-primary-500 focus-visible:ring-primary-500 data-[state=checked]:text-primary-500 dark:border-primary-100 dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:text-primary-500 data-[state=checked]:border-primary-500 data-[state=checked]:before:bg-primary-500 dark:data-[state=checked]:before:bg-primary-500 dark:focus-visible:border-primary-500',
        secondary:
          'border-metal-200 ring-offset-metal-900 focus-visible:ring-metal-900 data-[state=checked]:text-metal-500 dark:border-metal-100 dark:ring-offset-metal-500 dark:focus-visible:ring-metal-500 dark:data-[state=checked]:text-metal-500 data-[state=checked]:before:bg-metal-900 dark:data-[state=checked]:before:bg-metal-500 dark:focus-visible:border-metal-800 dark:data-[state=checked]:border-metal-800 data-[state=checked]:border-metal-900',
        success:
          'border-success-200 ring-offset-success-500 focus-visible:ring-success-500 data-[state=checked]:text-success-500 dark:border-success-100 dark:ring-offset-success-500 dark:focus-visible:ring-success-500 dark:data-[state=checked]:text-success-500 data-[state=checked]:border-success-400 data-[state=checked]:before:bg-success-500 dark:data-[state=checked]:before:bg-success-500 dark:focus-visible:border-success-500',
        warning:
          'border-warning-200 ring-offset-warning-500 focus-visible:ring-warning-500 data-[state=checked]:text-warning-500 dark:border-warning-100 dark:ring-offset-warning-500 dark:focus-visible:ring-warning-500 dark:data-[state=checked]:text-warning-500 data-[state=checked]:border-warning-400 data-[state=checked]:before:bg-warning-500 dark:data-[state=checked]:before:bg-warning-500 dark:focus-visible:border-warning-500',
        error:
          'border-error-200 ring-offset-error-500 focus-visible:ring-error-500 data-[state=checked]:text-error-500 dark:border-error-200 dark:ring-offset-error-500 dark:focus-visible:ring-error-500 dark:focus-visible:border-error-500 dark:data-[state=checked]:text-error-500 data-[state=checked]:border-error-500 data-[state=checked]:before:bg-error-500 dark:data-[state=checked]:before:bg-error-500',
      },
    },
  },
}

export { checkboxTheme }
