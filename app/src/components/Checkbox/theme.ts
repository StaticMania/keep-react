interface KeepCheckboxTheme {
  input: {
    base: string
  }
  button: {
    base: string
    shape: {
      base: string
      rounded: string
      circle: string
    }
  }
}

export const checkboxTheme: KeepCheckboxTheme = {
  input: {
    base: 'peer absolute h-5 w-5 cursor-pointer opacity-0 peer-checked:before:h-2.5 peer-checked:before:w-2.5',
  },
  button: {
    base: 'flex h-5 w-5 items-center justify-center rounded border fill-white peer-checked:bg-metal-900 peer-disabled:opacity-50',
    shape: {
      base: 'pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border border-metal-200 opacity-100 peer-checked:border-metal-900 peer-checked:before:h-2.5 peer-checked:before:w-2.5 peer-checked:before:bg-metal-900 peer-disabled:opacity-50',
      rounded: 'before:rounded-sm rounded',
      circle: 'before:rounded-full rounded-full',
    },
  },
}
