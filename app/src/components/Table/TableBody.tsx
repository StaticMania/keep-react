'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props}>
        {children}
      </tbody>
    )
  },
)
TableBody.displayName = 'TableBody'

export { TableBody }
