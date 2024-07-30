'use client'
import { ButtonHTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import { usePaginationContext } from './Context'
import { paginationTheme } from './theme'

export interface ItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  asChild?: boolean
}

const PaginationItem = forwardRef<HTMLButtonElement, ItemProps>(
  ({ className, children, active = false, asChild, ...props }, ref) => {
    const { shape = 'rounded' } = usePaginationContext()
    const { item } = paginationTheme

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

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
