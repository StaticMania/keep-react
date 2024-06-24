'use client'
import { DetailsHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const SidebarDropdown = forwardRef<HTMLDetailsElement, DetailsHTMLAttributes<HTMLDetailsElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <details {...props} ref={ref} className={cn('group', className)}>
        {children}
      </details>
    )
  },
)

SidebarDropdown.displayName = 'SidebarDropdown'

export { SidebarDropdown }
