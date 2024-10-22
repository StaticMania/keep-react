export interface KeepRadioTheme {
  input: string
  button: {
    base: string
    variant: {
      square: string
      circle: string
      rounded: string
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

export const radioTheme: KeepRadioTheme = {
  input: 'peer absolute h-5 w-5 cursor-pointer opacity-0 peer-checked:before:h-2.5 peer-checked:before:w-2.5',
  button: {
    base: 'pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border opacity-100 transition-all duration-300  peer-checked:before:h-2.5 peer-checked:before:w-2.5 peer-checked:before:animate-zoomIn  peer-disabled:opacity-50',
    variant: {
      square: 'rounded-none before:rounded-none',
      circle: 'before:rounded-full rounded-full',
      rounded: 'before:rounded-sm rounded',
    },
    color: {
      primary:
        'peer-checked:border-primary-500 border-metal-200 peer-checked:before:bg-primary-500 dark:border-metal-100 dark:peer-checked:border-primary-500 dark:peer-checked:before:bg-primary-500',
      secondary:
        'peer-checked:border-metal-900 border-metal-300 peer-checked:before:bg-metal-900 dark:border-metal-100 dark:peer-checked:border-metal-50 dark:peer-checked:before:bg-metal-50',
      success:
        'peer-checked:border-success-500 border-success-200 peer-checked:before:bg-success-500 dark:border-success-500 dark:peer-checked:border-success-500 dark:peer-checked:before:bg-success-500',
      warning:
        'peer-checked:border-warning-500 border-warning-500 peer-checked:before:bg-warning-500 dark:border-warning-500 dark:peer-checked:border-warning-500 dark:peer-checked:before:bg-warning-500',
      error:
        'peer-checked:border-error-500 border-error-500 peer-checked:before:bg-error-500 dark:border-error-500 dark:peer-checked:border-error-500 dark:peer-checked:before:bg-error-500',
    },
  },
}
