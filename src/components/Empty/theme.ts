import type { keepEmptyTheme } from '.'

/**
 * Represents the theme configuration for the Empty component.
 */
export const emptyTheme: keepEmptyTheme = {
  base: 'w-full py-10 flex flex-col items-center justify-center',
  title: 'text-body-3 md:text-description-4 text-metal-700 font-medium mt-5',
  content: 'text-body-5 md:text-body-3 text-metal-400 text-center font-normal mt-2.5 mb-8 max-w-lg',
}
