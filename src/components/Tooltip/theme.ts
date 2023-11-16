import type { keepFloatingTheme } from '../Floating'

export const tooltipTheme: keepFloatingTheme = {
  target: 'w-fit',
  base: 'absolute inline-block rounded-lg py-2 px-3  shadow-small max-w-[300px] z-50',
  animation: 'transition-opacity',
  hidden: 'invisible opacity-0',
  style: {
    dark: 'bg-metal-800 text-metal-50',
    light: 'bg-metal-100 text-metal-600',
    auto: 'bg-metal-100 text-metal-600',
  },
  title: 'relative z-20 pb-1 text-body-5 font-semibold',
  content: 'relative z-20 text-body-5 font-medium',
  arrow: {
    base: 'absolute z-10 h-2 w-2 rotate-45',
    style: {
      dark: 'bg-metal-800',
      light: '!bg-metal-100',
      auto: 'bg-metal-100',
    },
    placement: '-4px',
  },
}
