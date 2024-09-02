'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../utils/cn'

export const PopoverTitle = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2 {...props} ref={ref} className={cn('text-body-3 font-medium text-metal-900 dark:text-white', className)}>
        {children}
      </h2>
    )
  },
)

PopoverTitle.displayName = 'PopoverTitle'
