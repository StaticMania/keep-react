'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <tfoot ref={ref} className={cn('border-t bg-metal-900 font-medium [&>tr]:last:border-b-0', className)} {...props}>
        {children}
      </tfoot>
    )
  },
)
TableFooter.displayName = 'TableFooter'

export { TableFooter }
