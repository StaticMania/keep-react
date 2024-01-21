import { keepFloatingTheme } from '../Floating'

export interface keepDropdownDividerTheme {
  divider: string
}

export interface keepDropdownHeaderTheme {
  header: string
}

export interface keepDropdownItemTheme {
  base: string
  icon: string
}

export interface keepDropdownFloatingTheme
  extends keepFloatingTheme,
    keepDropdownDividerTheme,
    keepDropdownHeaderTheme {
  item: keepDropdownItemTheme
}

export interface keepDropdownTheme {
  floating: keepDropdownFloatingTheme
  content: string
  arrowIcon: string
}

export const dropdownTheme: keepDropdownTheme = {
  arrowIcon: 'ml-2 h-4 w-4',
  content: 'py-1',
  floating: {
    animation: 'transition-opacity',
    arrow: {
      base: 'absolute z-10 h-2 w-2 rotate-45',
      style: {
        dark: 'bg-metal-900 ',
        light: 'bg-white',
        auto: 'bg-white ',
      },
      placement: '-4px',
    },
    base: 'z-40 w-fit rounded-md divide-y divide-gray-100 border border-metal-200 shadow-large',
    content: 'py-1 text-body-5 text-metal-700',
    divider: 'my-1 h-px bg-metal-100',
    header: 'block py-2 px-4 text-body-5 text-metal-700',
    hidden: 'invisible opacity-0',
    item: {
      base: 'flex items-center justify-start py-2 px-4 text-body-5 text-metal-700 cursor-pointer hover:bg-metal-25 border-b border-b-metal-50 last:border-none',
      icon: 'pr-2',
    },
    style: {
      dark: 'bg-metal-900 text-white ',
      light: 'bg-white text-metal-900',
      auto: 'bg-white text-metal-900',
    },
    target: 'w-fit',
    title: '',
  },
}
