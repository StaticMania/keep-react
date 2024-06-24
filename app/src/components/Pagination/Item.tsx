'use client'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { usePaginationContext } from './Context'
import { paginationTheme } from './theme'

export interface ItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

const PaginationItem = forwardRef<HTMLButtonElement, ItemProps>(
  ({ className, children, active = false, ...props }, ref) => {
    const { shape = 'rounded' } = usePaginationContext()
    const { item } = paginationTheme
    return (
      <li>
        <button
          {...props}
          ref={ref}
          className={cn(item.base, item.active[active ? 'on' : 'off'], item.shape[shape], className)}>
          {children}
        </button>
      </li>
    )
  },
)

PaginationItem.displayName = 'Pagination.Item'

export { PaginationItem }
