import { keepEmptyTheme } from './Empty'

export const emptyTheme: keepEmptyTheme = {
  root: {
    base: 'flex max-w-xl mx-auto flex-col items-center justify-center p-6',
  },
  title: {
    base: 'mb-[14px] mt-5 text-heading-5 font-medium text-metal-700',
  },
  description: {
    base: 'mb-8 text-center text-body-3 font-normal text-metal-400',
  },
  redirectBtn:
    'flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-body-4 font-medium text-white transition-all duration-150 hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2 active:focus:scale-95 disabled:cursor-not-allowed disabled:bg-primary-100',
}
