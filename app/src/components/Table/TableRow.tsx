'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-b-metal-50 transition-colors hover:bg-metal-25 data-[state=selected]:bg-metal-50 dark:border-b-metal-800 dark:hover:bg-metal-800',
        className,
      )}
      {...props}
    />
  ),
)
TableRow.displayName = 'TableRow'

export { TableRow }
