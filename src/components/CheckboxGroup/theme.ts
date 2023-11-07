import type { keepCheckboxGroupTheme } from '.'

export const checkboxGroupTheme: keepCheckboxGroupTheme = {
  label: {
    base: 'flex select-none gap-3 rounded-lg border cursor-pointer transition-colors duration-200',
    iconRight: {
      on: 'items-center justify-between',
      off: 'items-start',
    },
    selected: {
      on: 'border-primary-200 bg-primary-25',
      off: 'border-slate-200',
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
        off: 'bg-slate-200 text-slate-500',
      },
    },
    circleImg: {
      base: 'flex h-10 w-10 items-center justify-center rounded-full',
      selected: {
        on: 'bg-primary-50',
        off: 'bg-slate-200',
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
      base: 'text-base md:text-lg font-normal md:font-medium leading-5',
      selected: {
        on: 'text-primary-500',
        off: 'text-slate-700',
      },
    },
    description: {
      base: 'mt-1 text-xs md:text-base font-normal',
      selected: {
        on: 'text-primary-400',
        off: 'text-slate-400',
      },
    },
  },
}
