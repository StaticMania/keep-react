import type { keepStatisticTheme } from '.'

export const statisticsTheme: keepStatisticTheme = {
  rate: {
    base: 'flex items-center gap-1 text-sm font-medium text-primary-500',
  },
  title: {
    base: 'flex items-center gap-3',
    title: 'text-sm md:text-base font-normal text-slate-400 first-letter:uppercase',
    filter: {
      text: 'pr-1.5 text-xs text-slate-500',
      icon: 'border-l-2 border-slate-200 pl-1.5',
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
    base: 'text-base md:text-2xl font-semibold text-slate-700',
    spacing: 'mr-1',
  },
}
