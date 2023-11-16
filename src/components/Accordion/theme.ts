import type { keepAccordionTheme } from './Accordion'
export const accordionTheme: keepAccordionTheme = {
  root: {
    base: 'bg-metal-50',
    flush: {
      off: 'border-b-2 border-b-metal-200',
      on: 'border-b',
    },
  },
  content: {
    base: 'pb-5 px-5 md:text-body-4 text-body-5 text-metal-500 font-normal transition-all duration-300',
  },
  title: {
    disabled: 'cursor-not-allowed opacity-50',
    arrow: {
      base: 'h-6 w-6 shrink-0',
      open: {
        off: '',
        on: 'rotate-180',
      },
    },
    base: 'flex w-full items-center py-5 px-5 text-left font-medium md:text-body-2  text-metal-800 hover:bg-metal-100',
    iconPosition: {
      left: 'gap-5',
      right: 'justify-between',
    },
    flush: {
      off: 'hover:bg-metal-50',
      on: '!bg-transparent',
    },
    heading: '',
    open: {
      off: 'bg-metal-25',
      on: 'bg-metal-50',
    },
  },
}
