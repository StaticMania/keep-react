'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const PopoverDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <p {...props} ref={ref} className={cn('text-body-4 font-normal text-metal-600 dark:text-metal-300', className)}>
        {children}
      </p>
    )
  },
)

PopoverDescription.displayName = 'PopoverDescription'

export { PopoverDescription }
