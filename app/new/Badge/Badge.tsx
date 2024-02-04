import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'

interface BadgeProps {
  children?: ReactNode
  className?: string
  dotStyle?: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  showIcon?: boolean
  iconPosition?: 'left' | 'right'
  size?: 'sm' | 'md'
  variant?: 'base' | 'border' | 'background'
  disabled?: boolean
}

const badgeTheme = {
  base: 'inline-flex w-fit items-center font-inherit rounded-full text-body-6 font-medium cursor-pointer',
  size: {
    sm: 'px-1 h-4',
    md: 'px-2 h-5',
  },
  disabled: 'pointer-events-none cursor-not-allowed select-none bg-metal-300 opacity-30',
  variant: {
    base: {
      primary: 'bg-primary-50 text-primary-500',
      secondary: 'bg-metal-50 text-metal-500',
      success: 'bg-success-50 text-success-500',
      warning: 'bg-warning-50 text-warning-500',
      error: 'bg-error-50 text-error-500',
    },
    border: {
      primary: 'border border-primary-100 bg-primary-50 text-primary-500',
      secondary: 'border border-metal-200 bg-metal-50 text-metal-500',
      success: 'border border-success-100 bg-success-50 text-success-500',
      warning: 'border border-warning-200 bg-warning-50 text-warning-500',
      error: 'border border-error-100 bg-error-50 text-error-500',
    },
    background: {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-metal-500 text-white',
      success: 'bg-success-500 text-white',
      warning: 'bg-warning-500 text-white',
      error: 'bg-error-500 text-white',
    },
  },
  icon: {
    base: 'rounded-full',
    size: {
      sm: 'h-1.5 w-1.5',
      md: 'h-2 w-2',
    },
    color: {
      primary: 'bg-primary-500',
      secondary: 'bg-metal-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
      error: 'bg-error-500',
    },
  },
}

export const Badge: FC<BadgeProps> = ({
  size = 'md',
  color = 'primary',
  variant = 'base',
  children,
  disabled = false,
  showIcon = false,
  iconPosition = 'left',
  className,
  dotStyle,
}) => {
  return (
    <div
      aria-disabled={disabled}
      className={cn(
        disabled && badgeTheme.disabled,
        badgeTheme.base,
        badgeTheme.size[size],
        badgeTheme.variant[variant][color],
        className,
      )}>
      {showIcon && iconPosition === 'left' && (
        <div
          className={cn(
            badgeTheme.icon.base,
            badgeTheme.icon.size[size],
            badgeTheme.icon.color[color],
            'mr-1',
            dotStyle,
          )}></div>
      )}
      {children}
      {showIcon && iconPosition === 'right' && (
        <div
          className={cn(
            badgeTheme.icon.base,
            badgeTheme.icon.size[size],
            badgeTheme.icon.color[color],
            'ml-1',
            dotStyle,
          )}></div>
      )}
    </div>
  )
}
