export const paginationTheme = {
  root: {
    base: 'mx-auto flex w-full items-center gap-5',
  },
  list: {
    base: 'flex items-center gap-[6px]',
  },
  item: {
    base: 'flex h-9 w-9 items-center justify-center text-body-4 font-medium transition-colors duration-300',
    shape: {
      rounded: 'rounded-md',
      circle: 'rounded-full',
    },
    active: {
      on: 'bg-metal-900 text-white',
      off: 'text-metal-600 hover:bg-metal-25',
    },
  },
  goto: {
    base: 'flex items-center gap-2 text-body-5 font-medium text-metal-400',
  },
  navigator: {
    base: 'flex items-center justify-center gap-1 border border-metal-100 bg-white text-body-5 font-medium transition-all duration-300 hover:bg-metal-25 text-metal-600',
    shape: {
      rounded: 'rounded-lg px-2.5 py-2',
      circle: 'h-9 w-9 rounded-full',
    },
  },
}
