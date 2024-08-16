'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export const LineProgressText = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn('w-10 text-end text-body-4 font-medium text-primary-500', className)}>
        {children}
      </div>
    )
  },
)

LineProgressText.displayName = 'LineProgressText'
