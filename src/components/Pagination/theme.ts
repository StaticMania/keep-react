import { keepPaginationTheme } from '.'

export const paginationTheme: keepPaginationTheme = {
  base: '',
  paginateWithBorder: 'p-2 border border-slate-200 rounded-md',
  layout: {
    table: {
      base: 'text-sm text-slate-700',
      span: 'font-semibold text-slate-900',
    },
  },
  pages: {
    base: 'xs:mt-0 inline-flex items-center space-x-1.5',
    previous: {
      base: 'inline-flex items-center bg-white leading-tight text-slate-700',
      icon: 'h-4 w-4',
      title: 'ml-2',
      iconWithText: 'py-2 px-3',
      iconWithOutText: 'p-2',
    },
    next: {
      base: 'inline-flex items-center bg-white leading-tight text-slate-700',
      icon: 'h-4 w-4',
      title: 'mr-2',
      iconWithText: 'py-2 px-3',
      iconWithOutText: 'p-2',
    },

    selector: {
      base: 'w-10  h-10 bg-white py-2 text-slate-700 font-medium leading-tight hover:bg-slate-100 hover:text-slate-700',
      active: {
        base: '!bg-slate-700 hover:!bg-slate-800 !text-white',
        circle: 'rounded-full',
        roundSquare: 'rounded-md',
      },
    },
    prevNextShape: {
      none: '',
      circle: 'border border-slate-200 rounded-full',
      round: 'border border-slate-200 rounded-full',
      roundSquare: 'border border-slate-200 rounded-md',
    },
  },
  goTo: {
    base: '!ml-5 pl-4 relative',
    title: 'px-3',
    input:
      'form-input max-w-[100px] appearance-none text-slate-700 border border-slate-200 rounded py-2 px-3 leading-tight focus:outline-none  focus:ring-0 focus:bg-white focus:border-slate-200',
    withBorder:
      'before:content[""] before:absolute before:top-0 before:left-0 before:h-[calc(100%+1rem)] before:-translate-y-[8px] before:border-l before:border-slate-200',
    goToShape: {
      none: '',
      circle: 'border border-slate-200 rounded-full',
      round: 'border border-slate-200 rounded-full',
      roundSquare: 'border border-slate-200 rounded-md',
    },
  },
}
