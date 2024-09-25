'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Timeline = forwardRef<HTMLOListElement, LiHTMLAttributes<HTMLOListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ol
        ref={ref}
        {...props}
        className={cn('relative space-y-6 border-l-2 border-metal-100 dark:border-metal-800', className)}>
        {children}
      </ol>
    )
  },
)

Timeline.displayName = 'Timeline'

export { Timeline }
