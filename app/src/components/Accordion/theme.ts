import { keepAccordionTheme } from './Accordion'

export const accordionTheme: keepAccordionTheme = {
  container: {
    base: 'flex cursor-pointer items-center w-full justify-between px-6 py-5',
    open: '',
  },
  content: {
    base: 'select-none text-body-3 font-normal text-metal-500 pb-5 px-6',
  },
  panel: {
    flush: {
      on: 'rounded-none border-b border-metal-100',
      off: 'rounded-xl border border-metal-100 bg-white',
    },
  },
  icon: {
    base: 'transition-transform duration-300',
    rotated: {
      full: 'rotate-180',
      half: 'rotate-0',
    },
  },
  title: {
    base: 'select-none text-left text-body-1 font-medium text-metal-700 first-letter:mr-1 first-letter:text-primary-500',
  },
}
