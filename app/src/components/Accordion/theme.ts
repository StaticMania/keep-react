import { keepAccordionTheme } from '.'

export const accordionTheme: keepAccordionTheme = {
  container: {
    base: 'flex cursor-pointer items-center justify-between px-5 py-[18px]',
    open: 'border-b border-b-metal-200 bg-metal-200/50 group-hover:bg-metal-100 group-hover:bg-metal-200/50',
  },
  content: {
    base: 'p-6 text-body-4 font-normal text-metal-500',
  },
  panel: {
    base: 'group transition-colors duration-200',
    panelBg: 'bg-metal-50',
  },
  icon: {
    base: 'transition-transform duration-300',
    rotated: {
      full: 'rotate-25',
      half: 'rotate-90',
    },
  },
  title: { base: 'select-none text-body-2 font-medium text-metal-700' },
}
