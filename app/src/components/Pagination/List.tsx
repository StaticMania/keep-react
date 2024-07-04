'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

const PaginationList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    const { list } = paginationTheme
    return (
      <ul {...props} ref={ref} className={cn(list.base, className)}>
        {children}
      </ul>
    )
  },
)

PaginationList.displayName = 'Pagination.List'

export { PaginationList }
