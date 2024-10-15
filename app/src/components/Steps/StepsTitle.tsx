'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const StepsTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn('block text-body-4 font-medium text-metal-900 dark:text-white', className)}>
        {children}
      </p>
    )
  },
)

StepsTitle.displayName = 'StepsTitle'

export { StepsTitle }
