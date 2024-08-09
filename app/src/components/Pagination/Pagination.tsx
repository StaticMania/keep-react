'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { PaginationContext } from './Context'
import { paginationTheme } from './theme'

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  shape?: 'rounded' | 'circle'
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, children, shape = 'rounded', ...props }, ref) => {
    const { root } = paginationTheme
    return (
      <div {...props} ref={ref} aria-label="pagination" className={cn(root.base, className)}>
        <PaginationContext.Provider value={{ shape }}>{children}</PaginationContext.Provider>
      </div>
    )
  },
)

Pagination.displayName = 'Pagination'

export { Pagination }
