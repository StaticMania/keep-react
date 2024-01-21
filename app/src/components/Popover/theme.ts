interface keepPopoverTheme {
  root: {
    base: string
    icon: string
  }
  title: string
  description: {
    base: string
    title: {
      off: string
      on: string
    }
  }
  container: string
}

export const popoverTheme: keepPopoverTheme = {
  root: {
    base: 'relative z-40 max-w-sm rounded-md bg-white px-6 py-[22px] shadow-medium transition-all duration-300',
    icon: 'absolute right-6 top-[22px]',
  },
  title: 'w-[92%] text-body-2 font-medium text-metal-700',
  description: {
    base: 'text-body-5 font-normal text-metal-500',
    title: {
      off: 'w-[92%]',
      on: 'mt-[14px]',
    },
  },
  container: 'mt-4 flex items-center gap-3',
}
