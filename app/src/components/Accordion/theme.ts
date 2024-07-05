import { keepAccordionTheme } from './Accordion'

export const accordionTheme: keepAccordionTheme = {
  container: {
    base: 'flex cursor-pointer items-center w-full justify-between px-6 py-5',
    open: '',
  },
  content: {
    base: 'select-none text-body-3 font-normal text-metal-600 dark:text-metal-300 pb-5 px-6',
  },
  panel: {
    flush: {
      on: 'rounded-none border-b border-metal-100 dark:border-metal-900',
      off: 'rounded-xl border border-metal-100 dark:border-metal-800 bg-transparent dark:bg-transparent',
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
    base: 'select-none text-left text-body-1 font-medium text-metal-900 first-letter:mr-1 first-letter:text-metal-900 dark:first-letter:text-white dark:text-white',
  },
}
