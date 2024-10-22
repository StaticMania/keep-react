import { cn } from '../../utils/cn'

export const badgeTheme = {
  base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-body-5 gap-x-1 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
  color: {
    base: {
      primary: 'bg-primary-25 hover:bg-primary-50 text-primary-500 dark:hover:bg-primary-900/75 dark:bg-primary-900',
      secondary:
        'bg-metal-50 hover:bg-metal-100 text-metal-900 dark:bg-metal-900 dark:hover:bg-metal-900/75 dark:text-white',
      success: 'bg-success-25 hover:bg-success-50 text-success-500 dark:bg-success-900 dark:hover:bg-success-900/75',
      warning: 'bg-warning-25 hover:bg-warning-50 text-warning-500 dark:bg-warning-900 dark:hover:bg-warning-900/75',
      error: 'bg-error-25 hover:bg-error-50 text-error-500 dark:bg-error-900/30 dark:hover:bg-error-900/50',
    },
    border: {
      primary: 'bg-transparent text-primary-500 border border-primary-200 dark:border-primary-800',
      secondary: 'bg-transparent dark:border-metal-800 text-metal-900 dark:text-white border border-metal-200',
      success: 'bg-transparent text-success-500 border dark:border-success-800 border-success-200',
      warning: 'bg-transparent text-warning-500 border border-warning-200 dark:border-warning-800',
      error: 'bg-transparent text-error-500 border border-error-200 dark:border-error-800',
    },
    background: {
      primary: 'bg-primary-500 text-white focus:ring-primary-500',
      secondary: 'bg-metal-900 dark:bg-white dark:text-metal-900 text-white',
      success: 'bg-success-500 text-white',
      warning: 'bg-warning-500 text-white',
      error: 'bg-error-500 text-white',
    },
  },
}

type BadgeVariants = (options?: {
  color?: keyof typeof badgeTheme.color.base
  variant?: keyof typeof badgeTheme.color
}) => string

const badgeVariants: BadgeVariants = ({ color = 'secondary', variant = 'background' } = {}) => {
  return cn(badgeTheme.base, badgeTheme.color[variant][color])
}

export { badgeVariants }
