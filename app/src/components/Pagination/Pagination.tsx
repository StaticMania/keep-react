'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { PaginationContext } from './Context'
import { PaginationGoTo } from './GoTo'
import { PaginationItem } from './Item'
import { PaginationList } from './List'
import { PaginationNavigator } from './Navigator'
import { paginationTheme } from './theme'

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  shape?: 'rounded' | 'circle'
}

const PaginationComponent = forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, children, shape = 'rounded', ...props }, ref) => {
    const { root } = paginationTheme
    return (
      <div {...props} role="navigation" ref={ref} aria-label="pagination" className={cn(root.base, className)}>
        <PaginationContext.Provider value={{ shape }}>{children}</PaginationContext.Provider>
      </div>
    )
  },
)

PaginationComponent.displayName = 'Pagination'

export const Pagination = Object.assign(PaginationComponent, {
  List: PaginationList,
  Item: PaginationItem,
  Navigator: PaginationNavigator,
  GoTo: PaginationGoTo,
})
