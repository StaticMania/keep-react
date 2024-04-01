interface KeepDrawerTheme {
  base: string
  isClosing: {
    on: string
    off: string
  }
  content: {
    base: string
    position: {
      top: string
      bottom: string
      left: string
      right: string
    }
  }
}

export const keepDrawerTheme: KeepDrawerTheme = {
  base: 'fixed inset-0 z-50 bg-metal-900 bg-opacity-50 backdrop-blur-[2px] transition-opacity',
  isClosing: {
    on: 'opacity-0',
    off: 'opacity-100',
  },
  content: {
    base: 'drawer-content absolute bg-white p-6 shadow-lg',
    position: {
      top: 'left-0 right-0 top-0 h-1/2 animate-keep-slide-down rounded-b-2xl',
      bottom: 'bottom-0 left-0 right-0 h-1/2 animate-keep-slide-up rounded-t-2xl',
      left: 'left-0 top-0 h-full w-3/4 animate-keep-slide-left rounded-r-2xl xl:w-1/4',
      right: 'right-0 top-0 h-full w-3/4 animate-keep-slide-right rounded-l-2xl xl:w-1/4',
    },
  },
}
