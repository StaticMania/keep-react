'use client'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

export interface NavigatorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'rounded' | 'circle'
}

const PaginationNavigator = forwardRef<HTMLButtonElement, NavigatorProps>(
  ({ className, children, shape = 'rounded', ...props }, ref) => {
    const { navigator } = paginationTheme
    return (
      <button {...props} ref={ref} className={cn(navigator.base, navigator.shape[shape], className)}>
        {children}
      </button>
    )
  },
)

PaginationNavigator.displayName = 'Pagination.Navigator'

export { PaginationNavigator }
