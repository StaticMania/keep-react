'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

const PaginationGoTo = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, ...props }, ref) => {
  const { goto } = paginationTheme
  return (
    <div {...props} ref={ref} className={cn(goto.base, props.className)}>
      {children}
    </div>
  )
})
PaginationGoTo.displayName = 'Pagination.GoTo'

export { PaginationGoTo }
