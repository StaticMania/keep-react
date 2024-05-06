'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const SidebarDropdownList = forwardRef<HTMLUListElement, LiHTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} {...props} className={cn('pl-6', className)}>
        {children}
      </ul>
    )
  },
)

SidebarDropdownList.displayName = 'SidebarDropdownList'

export { SidebarDropdownList }
