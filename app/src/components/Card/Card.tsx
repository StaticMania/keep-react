'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'max-w-xs overflow-hidden rounded-xl border border-metal-100 bg-white shadow-small dark:border-metal-900 dark:bg-metal-900',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'

export { Card }
