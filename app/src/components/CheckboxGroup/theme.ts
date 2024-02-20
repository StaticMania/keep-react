export interface keepCheckboxGroupTheme {
  label: {
    base: string
    iconRight: {
      on: string
      off: string
    }
    selected: {
      on: string
      off: string
    }
    spacing: string
  }

  main: {
    order: string
    spacing: string
  }
  root: {
    base: string
    icon: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    circleImg: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    squareImg: {
      base: string
      img: string
    }
  }
  textBox: {
    spacing: string
    order: string
    title: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
    description: {
      base: string
      selected: {
        on: string
        off: string
      }
    }
  }
}

export const checkboxGroupTheme: keepCheckboxGroupTheme = {
  label: {
    base: 'flex select-none gap-3 rounded-lg border cursor-pointer transition-colors duration-200',
    iconRight: {
      on: 'items-center justify-between',
      off: 'items-start',
    },
    selected: {
      on: 'border-primary-200 bg-primary-25',
      off: 'border-metal-200',
    },
    spacing: 'p-5',
  },

  main: {
    order: 'order-3',
    spacing: 'mr-5',
  },
  root: {
    base: 'flex items-center gap-3',
    icon: {
      base: 'flex h-10 w-10 items-center justify-center rounded-full',
      selected: {
        on: 'bg-primary-50 text-primary-500',
        off: 'bg-metal-200 text-metal-500',
      },
    },
    circleImg: {
      base: 'flex h-10 w-10 items-center justify-center rounded-full',
      selected: {
        on: 'bg-primary-50',
        off: 'bg-metal-200',
      },
    },
    squareImg: {
      base: 'h-28',
      img: 'h-full w-full rounded-l-lg',
    },
  },
  textBox: {
    spacing: 'py-3.5 px-5',
    order: 'order-2',
    title: {
      base: 'text-body-4 md:text-body-3 font-normal md:font-medium leading-5',
      selected: {
        on: 'text-primary-500',
        off: 'text-metal-700',
      },
    },
    description: {
      base: 'mt-1 text-body-5 md:text-body-4 font-normal',
      selected: {
        on: 'text-primary-400',
        off: 'text-metal-400',
      },
    },
  },
}
