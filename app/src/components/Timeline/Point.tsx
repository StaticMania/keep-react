'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export const TimelinePoint = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn(
          'absolute -left-[9px] h-4 w-4 rounded-full border border-white bg-metal-200 dark:border-metal-800 dark:bg-metal-800',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

TimelinePoint.displayName = 'TimelinePoint'
