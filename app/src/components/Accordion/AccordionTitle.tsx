'use client'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../utils/cn'

const AccordionTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLParagraphElement>) => {
    return (
      <p
        {...props}
        className={cn('select-none text-body-1 font-medium text-metal-900 dark:text-white ', className)}
        ref={ref}>
        {children}
      </p>
    )
  },
)

AccordionTitle.displayName = 'AccordionTitle'

export { AccordionTitle }
