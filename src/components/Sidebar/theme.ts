import { KeepSidebarTheme } from '.'

export const sidebarTheme: KeepSidebarTheme = {
  root: {
    base: 'h-full',
    collapsed: {
      on: 'w-16',
      off: 'w-full',
    },
    inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3',
  },
  collapse: {
    button:
      'group flex w-full items-center rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 transition duration-75 hover:bg-metal-100',
    icon: {
      base: 'h-6 w-6 text-metal-500 transition duration-75 group-hover:text-metal-900',
      open: {
        off: '',
        on: 'text-metal-900',
      },
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left',
      icon: 'h-6 w-6',
    },
    list: 'space-y-2 py-2',
  },
  cta: {
    base: 'mt-6 rounded-lg p-4',
    color: {
      blue: 'bg-primary-50',
      dark: 'bg-metal-50',
      failure: 'bg-red-50',
      gray: 'bg-alternative-50',
      green: 'bg-green-50',
      light: 'bg-light-50',
      red: 'bg-red-50',
      purple: 'bg-purple-50',
      success: 'bg-green-50',
      yellow: 'bg-yellow-50',
      warning: 'bg-yellow-50',
    },
  },
  item: {
    base: 'flex items-center justify-center rounded-lg p-2 text-body-5 md:text-body-4 font-normal text-metal-900 hover:bg-metal-100',
    active: 'bg-metal-100',
    collapsed: {
      insideCollapse: 'group w-full pl-8 transition duration-75',
      noIcon: 'font-bold',
    },
    content: {
      base: 'px-3 flex-1 whitespace-nowrap',
    },
    icon: {
      base: 'h-6 w-6 flex-shrink-0 text-metal-500 transition duration-75 group-hover:text-metal-900',
      active: 'text-metal-700',
    },
    label: '',
  },
  items: '',
  itemGroup: 'mt-4 space-y-2 border-t border-metal-200 pt-4 first:mt-0 first:border-t-0 first:pt-0',
  logo: {
    base: 'mb-5 flex items-center pl-2.5',
    collapsed: {
      on: 'hidden',
      off: 'self-center whitespace-nowrap text-body-2 font-semibold',
    },
    img: 'mr-3 h-6 sm:h-7',
  },
}
