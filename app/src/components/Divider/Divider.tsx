'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { DividerColorVariant, DividerSizeVariant, dividerTheme } from './theme'

interface DividerProps {
  color?: keyof DividerColorVariant
  size?: keyof DividerSizeVariant
  variant?: 'start' | 'end' | 'center'
  className?: string
  children?: ReactNode
}

export const Divider: FC<DividerProps> = ({
  color = 'secondary',
  size = 'md',
  variant = 'center',
  className,
  children,
  ...props
}) => {
  const { withChildren, withOutChildren } = dividerTheme
  if (!children) {
    return (
      <hr
        {...props}
        className={cn(withOutChildren.base, withOutChildren.size[size], withOutChildren.color[color], className)}
      />
    )
  }
  return (
    <div
      {...props}
      className={cn(
        withChildren.base,
        withChildren.textColor[color],
        withChildren.variant[variant],
        withChildren.color[variant][color],
        withChildren.size[variant][size],
        className,
      )}>
      {children}
    </div>
  )
}
