'use client'
import { TdHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        'px-6 py-3.5 align-middle text-body-4 font-medium capitalize text-metal-800 dark:text-white [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  ),
)
TableCell.displayName = 'TableCell'

export { TableCell }
