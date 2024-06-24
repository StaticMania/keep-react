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
      checked: string
      dashed: string
    }
  }
}

export const checkboxTheme: KeepCheckboxTheme = {
  input: {
    base: 'peer absolute h-5 w-5 cursor-pointer opacity-0 peer-checked:before:h-2.5 peer-checked:before:w-2.5',
  },
  button: {
    base: 'flex h-5 w-5 items-center justify-center rounded border fill-white peer-disabled:opacity-50',
    shape: {
      base: 'pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border border-metal-200 dark:border-metal-25 opacity-100 peer-checked:border-metal-900 dark:peer-checked:border-metal-25 peer-checked:before:h-2.5 peer-checked:before:w-2.5 peer-checked:before:bg-metal-900 dark:peer-checked:before:bg-metal-25 peer-disabled:opacity-50',
      rounded: 'before:rounded-sm rounded',
      circle: 'before:rounded-full rounded-full',
      checked:
        'pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border border-metal-200 dark:border-metal-25 opacity-100 peer-checked:border-metal-900 dark:peer-checked:border-metal-25 peer-checked:before:content-checkedLight dark:peer-checked:before:content-checkedDark peer-disabled:opacity-50',
      dashed:
        'pointer-events-none relative flex h-5 w-5 cursor-pointer items-center justify-center border border-metal-200 dark:border-metal-25 opacity-100 peer-checked:border-metal-900 dark:peer-checked:border-metal-25 peer-checked:before:content-dashedLight dark:peer-checked:before:content-dashedDark peer-disabled:opacity-50',
    },
  },
}
