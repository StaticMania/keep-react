'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export const SidebarHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cn(sidebarTheme.header, className)}>
        {children}
      </div>
    )
  },
)

SidebarHeader.displayName = 'Sidebar.Header'
