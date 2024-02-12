'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { PaginationContext } from './Context'
import { GoTo } from './GoTo'
import { Item } from './Item'
import { List } from './List'
import { Navigator } from './Navigator'
import { paginationTheme } from './theme'

interface PaginationProps {
  children?: ReactNode
  className?: string
  shape?: 'rounded' | 'circle'
  [key: string]: any
}

const PaginationComponent: FC<PaginationProps> = ({ className, children, shape = 'rounded', ...props }) => {
  const { root } = paginationTheme
  return (
    <nav role="navigation" {...props} aria-label="pagination" className={cn(root.base, className)}>
      <PaginationContext.Provider value={{ shape }}>{children}</PaginationContext.Provider>
    </nav>
  )
}

List.displayName = 'Pagination.List'
Item.displayName = 'Pagination.Item'
Navigator.displayName = 'Pagination.Navigator'
GoTo.displayName = 'Pagination.GoTo'

export const Pagination = Object.assign(PaginationComponent, {
  List,
  Item,
  Navigator,
  GoTo,
})
