'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export const SidebarBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cn(sidebarTheme.body, className)}>
        {children}
      </div>
    )
  },
)

SidebarBody.displayName = 'Sidebar.Body'
