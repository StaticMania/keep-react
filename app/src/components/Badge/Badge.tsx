'use client'
import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { BadgeColorVariant, BadgeSizeVariant, badgeTheme } from './theme'

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  dotStyle?: string
  color?: keyof BadgeColorVariant
  showIcon?: boolean
  iconPosition?: 'left' | 'right'
  size?: keyof BadgeSizeVariant
  variant?: 'base' | 'border' | 'background'
  disabled?: boolean
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      size = 'md',
      color = 'primary',
      variant = 'base',
      children,
      disabled = false,
      showIcon = false,
      iconPosition = 'left',
      className,
      dotStyle,
      ...props
    },
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        {...props}
        ref={ref}
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
  },
)

Badge.displayName = 'Badge'

export { Badge }
