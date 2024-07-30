import { cn } from '../../utils/cn'

export const badgeTheme = {
  base: 'inline-flex h-5 items-center justify-center rounded px-2 py-1 text-body-5 font-medium cursor-pointer transition-all duration-300',
  color: {
    base: {
      primary: 'bg-primary-25 hover:bg-primary-50 text-primary-500',
      secondary: 'bg-metal-50 hover:bg-metal-100 text-metal-900',
      success: 'bg-success-25 hover:bg-success-50 text-success-500',
      warning: 'bg-warning-25 hover:bg-warning-50 text-warning-500',
      error: 'bg-error-25 hover:bg-error-50 text-error-500',
    },
    border: {
      primary: 'bg-transparent text-primary-500 border border-primary-200',
      secondary: 'bg-transparent text-metal-900 dark:text-white border border-metal-200',
      success: 'bg-transparent text-success-500 border border-success-200',
      warning: 'bg-transparent text-warning-500 border border-warning-200',
      error: 'bg-transparent text-error-500 border border-error-200',
    },
    background: {
      primary: 'bg-primary-500 text-white',
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
