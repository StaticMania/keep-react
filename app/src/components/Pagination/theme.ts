interface keepPaginationTheme {
  root: {
    base: string
  }
  list: {
    base: string
  }
  item: {
    base: string
    shape: {
      rounded: string
      circle: string
    }
    active: {
      on: string
      off: string
    }
  }
  goto: {
    base: string
  }
  navigator: {
    base: string
    shape: {
      rounded: string
      circle: string
    }
  }
}

export const paginationTheme: keepPaginationTheme = {
  root: {
    base: 'mx-auto flex w-full items-center gap-5',
  },
  list: {
    base: 'flex items-center gap-[6px]',
  },
  item: {
    base: 'flex h-9 w-9 items-center justify-center text-body-3 font-medium transition-colors duration-300',
    shape: {
      rounded: 'rounded-md',
      circle: 'rounded-full',
    },
    active: {
      on: 'bg-metal-900 text-white',
      off: 'text-metal-600 dark:text-metal-200 dark:hover:text-white hover:bg-metal-25 dark:hover:bg-metal-800',
    },
  },
  goto: {
    base: 'flex items-center gap-2 text-body-4 font-medium text-metal-400 dark:text-metal-300',
  },
  navigator: {
    base: 'flex items-center justify-center gap-1 border border-metal-100 dark:border-metal-800 bg-white dark:bg-metal-900 text-body-4 font-medium transition-all duration-300 hover:bg-metal-25 dark:hover:bg-metal-900 text-metal-600 dark:text-metal-300',
    shape: {
      rounded: 'rounded-lg px-2.5 py-2',
      circle: 'h-9 w-9 rounded-full',
    },
  },
}
