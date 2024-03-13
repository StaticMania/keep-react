export interface keepTreeTheme {
  base: string
  list: {
    base: string
    hasChild: {
      on: string
      off: {
        hasIcon: {
          on: string
          off: string
        }
      }
    }
  }
  caretIcon: {
    base: string
    icon: string
  }

  showChildren: {
    base: string
    on: string
    off: string
  }

  nestedOrderList: {
    on: {
      base: string
      border: {
        on: string
        off: string
      }
    }
    off: string
  }
}

export const treeTheme: keepTreeTheme = {
  base: 'list-none space-y-2  text-body-5 md:text-body-4 font-medium text-metal-700',
  list: {
    base: 'text-body-5 md:text-body-4 font-medium text-metal-700 select-none',
    hasChild: {
      on: 'relative space-y-2',
      off: {
        hasIcon: {
          on: 'ml-6',
          off: 'ml-6 list-disc',
        },
      },
    },
  },
  caretIcon: {
    base: 'flex cursor-pointer items-center gap-2',
    icon: 'flex items-center gap-2',
  },

  showChildren: {
    base: 'text-body-5 md:text-body-4 font-medium text-metal-400 select-none',
    on: '',
    off: 'hidden',
  },

  nestedOrderList: {
    on: {
      base: 'ml-2.5 block space-y-2 px-10 py-4',
      border: {
        on: 'border-l border-l-metal-200',
        off: 'border-none',
      },
    },
    off: 'hidden',
  },
}
