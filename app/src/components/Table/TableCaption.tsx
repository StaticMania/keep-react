'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <caption
        ref={ref}
        className={cn('bg-white px-6 py-4 text-body-4 text-metal-900 dark:bg-metal-900 dark:text-white', className)}
        {...props}>
        {children}
      </caption>
    )
  },
)
TableCaption.displayName = 'TableCaption'

export { TableCaption }
