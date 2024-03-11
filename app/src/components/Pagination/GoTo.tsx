'use client'
import { FC, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

export interface GoToProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const GoTo: FC<GoToProps> = forwardRef<HTMLDivElement, GoToProps>(({ children, ...props }, ref) => {
  const { goto } = paginationTheme
  return (
    <div {...props} ref={ref} className={cn(goto.base, props.className)}>
      {children}
    </div>
  )
})
GoTo.displayName = 'Pagination.GoTo'
export { GoTo }
