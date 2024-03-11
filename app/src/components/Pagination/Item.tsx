'use client'
import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { usePaginationContext } from './Context'
import { paginationTheme } from './theme'

export interface ItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

const Item: FC<ItemProps> = forwardRef<HTMLButtonElement, ItemProps>(
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
Item.displayName = 'Pagination.Item'
export { Item }
