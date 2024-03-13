import { KeepCarouselTheme } from '.'

export const carouselTheme: KeepCarouselTheme = {
  base: 'relative h-56 sm:h-64 xl:h-80 2xl:h-96',
  indicators: {
    active: {
      off: {
        base: '',
        color: {
          white: 'bg-white/50 hover:bg-white',
          slate: 'bg-metal-200 hover:bg-metal-600',
        },
      },
      on: {
        base: '',
        type: {
          dot: '',
          ring: 'outline outline-offset-4 outline-2',
          bar: '',
          square: '',
          squareRing: 'outline outline-offset-4 outline-2',
        },
        color: {
          white: 'bg-white outline-white',
          slate: 'bg-metal-600 outline-metal-600',
        },
      },
    },
    base: 'overflow-hidden',
    wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
    type: {
      dot: 'h-3 w-3 rounded-full',
      ring: 'h-3 w-3 rounded-full',
      bar: 'h-1.5 w-8 rounded-full',
      square: 'h-3 w-3 rounded-sm rotate-45',
      squareRing: 'h-3 w-3 rounded-sm rotate-45',
    },
  },
  item: {
    base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2 flex h-full items-center justify-center',
    wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center',
  },

  control: {
    base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10 cursor-pointer',
    icon: 'h-5 w-5 text-white sm:h-6 sm:w-6',
  },
  leftControl: 'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
  rightControl: 'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none',
  scrollContainer: {
    base: 'flex touch-pan-y h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
    snap: 'snap-x',
  },
}
