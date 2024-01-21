interface keepStatisticTheme {
  rate: {
    base?: string
  }
  amount: {
    base: string
    spacing: string
  }
  title: {
    base: string
    title: string
    filter: {
      text: string
      icon: string
    }
  }
  icon: {
    base: string
    selected: {
      on: string
      off: string
    }
  }
}

export const statisticsTheme: keepStatisticTheme = {
  rate: {
    base: 'flex items-center gap-1 text-body-5 font-medium text-primary-500',
  },
  title: {
    base: 'flex items-center gap-3',
    title: 'text-body-5 md:text-body-4 font-normal text-metal-400 first-letter:uppercase',
    filter: {
      text: 'pr-1.5 text-body-6 text-metal-500',
      icon: 'border-l-2 border-metal-200 pl-1.5',
    },
  },
  icon: {
    base: 'flex h-14 w-14 items-center justify-center rounded-full',
    selected: {
      on: 'bg-success-500',
      off: 'bg-primary-400',
    },
  },
  amount: {
    base: 'text-body-4 md:text-body-1 font-semibold text-metal-700',
    spacing: 'mr-1',
  },
}
