interface KeepRadioTheme {
  input: string
  button: {
    base: string
    variant: {
      square: string
      circle: string
      rounded: string
    }
  }
}

export const radioTheme: KeepRadioTheme = {
  input: 'peer absolute h-5 w-5 cursor-pointer opacity-0 peer-checked:before:h-2.5 peer-checked:before:w-2.5',
  button: {
    base: 'pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border dark:border-metal-200 border-metal-300 opacity-100 peer-checked:border-metal-900 dark:peer-checked:border-metal-100 peer-checked:before:h-2.5 peer-checked:before:w-2.5 peer-checked:before:bg-metal-900 dark:peer-checked:before:bg-metal-100 peer-disabled:opacity-50',
    variant: {
      square: 'rounded-none before:rounded-none',
      circle: 'before:rounded-full rounded-full',
      rounded: 'before:rounded-sm rounded',
    },
  },
}
