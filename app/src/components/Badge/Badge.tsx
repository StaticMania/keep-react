'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { badgeTheme } from './theme'

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
  [key: string]: any
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
  ...props
}) => {
  return (
    <div
      {...props}
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
