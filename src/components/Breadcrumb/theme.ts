import { keepBreadCrumbTheme } from '.'

export const breadcrumbTheme: keepBreadCrumbTheme = {
  breadCrumbWithBorder: 'border-slate-100 p-[9px] border-t border-b',
  item: {
    base: 'group flex items-center',
    chevron: 'mx-1 group-first:hidden md:mx-2',
    href: {
      off: 'flex items-center text-base font-normal text-slate-500',
      on: 'group flex items-center text-base font-normal text-slate-500 hover:text-primary-400',
    },
    icon: 'mr-2',
    iconWrapper: 'relative flex items-center',
    disabled: 'text-slate-200',
    activeItem: {
      base: 'text-primary-400',
      border: 'px-2 py-1 bg-primary-25 border border-primary-100 text-primary-400 rounded-md',
      bar: 'text-primary-400 after:content[""] after:absolute after:bottom-0 after:w-8 after:h-0.5 after:bg-primary-400 after:left-2/4 after:-translate-x-2/4',
    },
  },
  list: 'flex items-center',
}
