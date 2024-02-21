interface TabsStyleTheme {
  root: {
    vertical: {
      on: string
      off: string
    }
  }
  content: {
    base: string
    vertical: {
      on: string
      off: string
    }
  }
  item: {
    base: string
    vertical: {
      on: string
      off: string
    }
    active: {
      base: string
      vertical: {
        on: string
        off: string
      }
    }
  }
  tabList: {
    base: string
    vertical: {
      on: string
      off: string
    }
  }
}

export const tabsTheme: TabsStyleTheme = {
  root: {
    vertical: {
      on: 'flex flex-row gap-x-5',
      off: '',
    },
  },
  content: {
    base: 'text-body-3 font-normal text-metal-500',
    vertical: {
      on: 'basis-3/4',
      off: '',
    },
  },

  item: {
    base: 'border-transparent bg-transparent px-4 py-3 text-body-3 font-medium hover:bg-primary-50 hover:text-primary-500',
    vertical: {
      on: 'flex w-full items-center justify-between gap-2 border-b border-b-metal-50  text-metal-600  last-of-type:border-b-0',
      off: 'border-b-2 border-transparent',
    },
    active: {
      base: 'bg-primary-50 text-primary-500',
      vertical: {
        on: '-ml-px border-l-2 border-l-primary-500',
        off: '-mb-px border-primary-500',
      },
    },
  },

  tabList: {
    base: 'mb-3 flex flex-auto',
    vertical: {
      on: 'basis-1/4 flex-col items-start border-l border-l-metal-100',
      off: 'max-w-max items-center border-b border-b-metal-100',
    },
  },
}
