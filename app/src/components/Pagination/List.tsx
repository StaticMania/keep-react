'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {}

const List = forwardRef<HTMLUListElement, ListProps>(({ children, ...props }, ref) => {
  const { list } = paginationTheme
  return (
    <ul {...props} ref={ref} className={cn(list.base, props.className)}>
      {children}
    </ul>
  )
})
List.displayName = 'Pagination.List'

export { List }
