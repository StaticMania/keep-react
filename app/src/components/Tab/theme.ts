export const tabTheme = {
  variants: {
    button: {
      base: 'rounded-lg px-4 py-2.5 text-body-4 font-medium transition-all duration-200',
      active: {
        true: 'text-white',
        false: 'bg-metal-50 text-metal-900 hover:text-metal-800',
      },
    },
    link: {
      base: 'rounded-none border-b-2 border-b-transparent px-4 py-2.5 text-body-4 font-medium transition-all duration-200',
      active: {
        true: 'border-b-metal-900 dark:border-b-white dark:text-white text-metal-900',
        false: 'text-metal-600 dark:text-metal-300 dark:hover:text-metal-200 hover:text-metal-900',
      },
    },
  },
}
