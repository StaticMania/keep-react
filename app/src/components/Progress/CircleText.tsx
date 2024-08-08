'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export const CircleProgressText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-body-4 font-medium text-metal-600',
          className,
        )}>
        {children}
      </div>
    )
  },
)

CircleProgressText.displayName = 'CircleProgressText'
