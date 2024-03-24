export interface KeepCarouselTheme {
  viewport: string
  controls: {
    wrapper: string
    button: {
      container: string
      wrapper: string
      svg: string
    }
    indicators: {
      container: string
      dot: string
    }
  }
  item: {
    container: string
    slide: string
  }
}

export const carouselTheme: KeepCarouselTheme = {
  viewport: 'overflow-hidden',
  controls: {
    wrapper: 'flex items-center justify-between mt-0 px-4',
    button: {
      container: 'flex items-center gap-2',
      wrapper:
        'inline-flex items-center justify-center border border-metal-200 rounded-full size-[2rem] text-metal-900 hover:text-gray-800 hover:bg-metal-50 bg-white disabled:bg-white disabled:opacity-50',
      svg: 'size-3',
    },
    indicators: {
      container: 'flex flex-wrap items-center gap-2',
      dot: 'inline-flex size-3 rounded-full border-2 border-metal-200',
    },
  },
  item: {
    container: 'flex',
    slide: 'flex-[0_0_100%] h-auto min-w-0 overflow-hidden p-4',
  },
}
