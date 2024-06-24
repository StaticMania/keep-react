'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const SidebarList = forwardRef<HTMLUListElement, LiHTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} {...props} className={cn('space-y-1', className)}>
        {children}
      </ul>
    )
  },
)

SidebarList.displayName = 'SidebarList'

export { SidebarList }
