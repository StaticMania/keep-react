'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn('border-t bg-metal-900 font-medium [&>tr]:last:border-b-0', className)} {...props} />
  ),
)
TableFooter.displayName = 'TableFooter'

export { TableFooter }
