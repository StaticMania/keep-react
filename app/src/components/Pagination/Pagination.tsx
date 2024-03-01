'use client'
import { FC, HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { PaginationContext } from './Context'
import { GoTo } from './GoTo'
import { Item } from './Item'
import { List } from './List'
import { Navigator } from './Navigator'
import { paginationTheme } from './theme'

interface PaginationProps extends HTMLAttributes<HTMLElement> {
  shape?: 'rounded' | 'circle'
}

const PaginationComponent: FC<PaginationProps> = forwardRef<HTMLElement, PaginationProps>(
  ({ className, children, shape = 'rounded', ...props }, ref) => {
    const { root } = paginationTheme
    return (
      <nav {...props} role="navigation" ref={ref} aria-label="pagination" className={cn(root.base, className)}>
        <PaginationContext.Provider value={{ shape }}>{children}</PaginationContext.Provider>
      </nav>
    )
  },
)

PaginationComponent.displayName = 'Pagination'
export const Pagination = Object.assign(PaginationComponent, {
  List,
  Item,
  Navigator,
  GoTo,
})
