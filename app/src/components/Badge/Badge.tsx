'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { badgeTheme, badgeVariants } from './theme'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof badgeTheme.color.base
  variant?: keyof typeof badgeTheme.color
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className, variant, color = 'primary', ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn(badgeVariants({ color, variant }), className)}>
        {children}
      </div>
    )
  },
)

Badge.displayName = 'Badge'

export { Badge }
