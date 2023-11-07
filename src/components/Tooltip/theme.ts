import type { keepFloatingTheme } from '../Floating'

export const tooltipTheme: keepFloatingTheme = {
  target: 'w-fit',
  base: 'absolute inline-block rounded-lg py-2 px-3  shadow-sm max-w-[300px] z-50',
  animation: 'transition-opacity',
  hidden: 'invisible opacity-0',
  style: {
    dark: 'bg-slate-800 text-slate-50',
    light: 'bg-slate-100 text-slate-600',
    auto: 'bg-slate-100 text-slate-600',
  },
  title: 'relative z-20 pb-1 text-sm font-semibold',
  content: 'relative z-20 text-sm font-medium',
  arrow: {
    base: 'absolute z-10 h-2 w-2 rotate-45',
    style: {
      dark: 'bg-slate-800',
      light: '!bg-slate-100',
      auto: 'bg-slate-100',
    },
    placement: '-4px',
  },
}
