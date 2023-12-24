import type { keepRatingTheme } from '.'

export const ratingTheme: keepRatingTheme = {
  base: 'flex items-center',
  star: {
    base: 'mr-2',
  },
  advanced: {
    base: 'flex items-center',
    label: 'text-body-5 font-medium text-primary-600 block w-14 text-center',
    progress: {
      base: 'mx-4 w-3/4 rounded-full bg-primary-50',
      fill: ' rounded-full bg-primary-500',
      label: 'text-body-5 font-medium text-primary-600',
      size: {
        xs: 'h-3',
        sm: 'h-4',
        md: 'h-5',
        lg: 'h-6',
      },
    },
  },
}
