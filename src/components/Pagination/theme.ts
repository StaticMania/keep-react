import { keepPaginationTheme } from '.'

/**
 * Represents the theme configuration for pagination.
 * @type {keepPaginationTheme}
 * - `paginateWithBorder` {string} - The border class for the pagination component.
 * - `layout` {object} - The layout configuration for the pagination component.
 * - `pages` {object} - The pages configuration for the pagination component.
 * - `goTo` {object} - The goTo configuration for the pagination component.
 */
export const paginationTheme: keepPaginationTheme = {
  paginateWithBorder: 'p-2 border border-metal-200 rounded-md',
  layout: {
    table: {
      base: 'text-body-5 text-metal-700',
      span: 'font-semibold text-metal-900',
    },
  },
  pages: {
    base: 'xs:mt-0 inline-flex items-center space-x-1.5',
    previous: {
      base: 'inline-flex items-center bg-white leading-tight text-metal-700',
      icon: 'h-4 w-4',
      title: 'ml-2',
      iconWithText: 'py-2 px-3',
      iconWithOutText: 'p-2',
    },
    next: {
      base: 'inline-flex items-center bg-white leading-tight text-metal-700',
      icon: 'h-4 w-4',
      title: 'mr-2',
      iconWithText: 'py-2 px-3',
      iconWithOutText: 'p-2',
    },

    selector: {
      base: 'w-10  h-10 bg-white py-2 text-metal-700 font-medium leading-tight hover:bg-metal-100 hover:text-metal-700',
      active: {
        base: '!bg-metal-700 hover:!bg-metal-800 !text-white',
        circle: 'rounded-full',
        roundSquare: 'rounded-md',
      },
    },
    prevNextShape: {
      none: '',
      circle: 'border border-metal-200 rounded-full',
      round: 'border border-metal-200 rounded-full',
      roundSquare: 'border border-metal-200 rounded-md',
    },
  },
  goTo: {
    base: '!ml-5 pl-4 relative',
    title: 'px-3',
    input:
      'form-input max-w-[100px] appearance-none text-metal-700 border border-metal-200 rounded py-2 px-3 leading-tight focus:outline-none  focus:ring-0 focus:bg-white focus:border-metal-200',
    withBorder:
      'before:content[""] before:absolute before:top-0 before:left-0 before:h-[calc(100%+1rem)] before:-translate-y-[8px] before:border-l before:border-metal-200',
    goToShape: {
      none: '',
      circle: 'border border-metal-200 rounded-full',
      round: 'border border-metal-200 rounded-full',
      roundSquare: 'border border-metal-200 rounded-md',
    },
  },
}
