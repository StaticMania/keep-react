'use client'
import { ButtonHTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import { paginationTheme } from './theme'

export interface NavigatorProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: 'rounded' | 'circle'
  asChild?: boolean
}

const PaginationNavigator = forwardRef<HTMLButtonElement, NavigatorProps>(
  ({ className, children, shape = 'rounded', asChild, ...props }, ref) => {
    const { navigator } = paginationTheme

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <button {...props} ref={ref} className={cn(navigator.base, navigator.shape[shape], className)}>
        {children}
      </button>
    )
  },
)

PaginationNavigator.displayName = 'Pagination.Navigator'

export { PaginationNavigator }
