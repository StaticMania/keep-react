import { KeepStepTheme } from './Steps'

export const stepTheme: KeepStepTheme = {
  base: 'flex items-center relative',
  main: {
    completed: {
      on: 'before:border-t-primary-500',
      off: 'before:border-t-metal-100',
    },
    borderType: {
      solid: 'before:border-t-2',
      dashed: 'before:border-dashed before:border-t-2',
      none: 'before:border-0',
    },
  },
  items: {
    base: "flex items-center justify-center flex-col z-20 relative before:absolute before:content-[''] last:before:border-0 before:w-full before:-right-2/4 before:top-5 before:-translate-y-2/4 before:-z-10",
    stepType: {
      base: 'w-10 h-10 rounded-full flex items-center justify-center',
      point: {
        base: 'bg-primary-50',
        on: 'bg-primary-500',
        off: 'bg-primary-50',
        active: 'border-4 border-primary-500',
      },
      icon: {
        base: '',
        active: 'border-2 border-primary-500 bg-white text-primary-500',
        on: 'bg-primary-500 text-white',
        off: 'bg-primary-50 text-primary-200',
      },
      number: {
        base: 'text-body-3 font-bold',
        on: 'bg-primary-500 text-white',
        off: 'bg-primary-50 text-primary-100',
        active: 'border-2 border-primary-500 text-primary-500',
      },
    },
  },
  stepText: {
    base: 'flex items-center justify-center flex-col text-center max-w-xs mt-[22px] gap-[14px]',
    title: {
      base: 'text-body-4 font-semibold',
      active: 'text-primary-500',
      inActive: 'text-metal-900',
    },
    description: {
      base: 'text-body-4 font-normal ',
      active: 'text-primary-500',
      inActive: 'text-metal-500',
    },
  },
}
