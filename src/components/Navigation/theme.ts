import { KeepNavigationTheme } from './Navigation'

export const navigationTheme: KeepNavigationTheme = {
  root: {
    base: 'bg-white lg:py-0 py-3.5 px-5 lg:px-0',
    rounded: {
      on: 'rounded-md',
      off: 'rounded-none',
    },
    bordered: {
      on: 'border border-metal-100',
      off: 'border-none',
    },
    container: {
      on: 'px-5',
      off: 'container mx-auto',
    },
  },
  navLink: {
    base: 'keep-navlink cursor-pointer lg:py-6 relative block transition-all duration-300',
    icon: {
      on: 'flex items-center justify-between gap-1 group',
      off: '',
    },
    linkText: 'text-body-4 font-normal text-metal-600 hover:text-metal-800 transition-colors duration-300',
    iconAnimation: {
      on: 'group-hover:rotate-180 transition-all duration-300',
      off: '',
    },
  },
  divider: {
    base: 'h-6 w-px bg-metal-200 mx-8 lg:block hidden',
  },
  collapse: {
    base: 'transition-all duration-300 z-50',
    menu: {
      open: 'translate-x-0',
      close: 'translate-x-full',
      position: 'lg:hidden fixed  right-0 top-0 bg-white w-full p-10',
    },
    type: {
      sidebar: 'w-1/2 md:w-1/3 h-full',
      fullWidth: 'w-full',
    },
  },
}
