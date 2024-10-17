'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const StepsDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn('text-body-4 text-metal-600 dark:text-metal-300', className)}>
        {children}
      </p>
    )
  },
)

StepsDescription.displayName = 'StepsDescription'

export { StepsDescription }
