interface BreadcrumbTheme {
  root: {
    base: string
  }
  borderType: {
    'border-xy': string
    'border-y': string
  }
  item: {
    base: string
    icon: {
      slash: string
      caret: string
    }
    text: {
      base: string
      activeType: {
        base: string
        border: string
      }
    }
  }
}

export const breadcrumbTheme: BreadcrumbTheme = {
  root: {
    base: 'flex max-w-[407px] items-center gap-2 px-3 py-2',
  },
  borderType: {
    'border-xy': 'rounded-xl border border-metal-100',
    'border-y': 'border-y border-metal-100',
  },
  item: {
    base: 'flex items-center gap-1',
    icon: {
      slash: 'flex h-4 w-4 items-center justify-center text-xl text-metal-600',
      caret: 'flex h-4 w-4 items-center justify-center text-metal-600',
    },
    text: {
      base: 'rounded-md px-[6px] py-1 text-body-5 font-medium transition-all duration-150 hover:text-primary-500',
      activeType: {
        base: 'bg-primary-25 text-primary-500',
        border: 'border border-primary-500 text-primary-500',
      },
    },
  },
}
