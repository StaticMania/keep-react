'use client'
import { ThHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        'h-14 bg-metal-50 px-6 text-left align-middle text-body-4 font-medium text-metal-900  dark:bg-metal-800 dark:text-white [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}>
      {children}
    </th>
  ),
)
TableHead.displayName = 'TableHead'

export { TableHead }
