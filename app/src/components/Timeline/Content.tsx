'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('space-y-1.5', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

Content.displayName = 'Timeline.Content'
