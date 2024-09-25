'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, children, ...props }, ref) => (
    <div id="tableScrollBar" className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn('w-full overflow-hidden rounded-2xl bg-white text-body-4 dark:bg-metal-900', className)}
        {...props}>
        {children}
      </table>
    </div>
  ),
)

Table.displayName = 'Table'

export { Table }
