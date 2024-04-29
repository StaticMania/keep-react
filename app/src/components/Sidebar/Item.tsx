'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export const SidebarItem = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <span {...props} ref={ref} className={cn(sidebarTheme.item, className)}>
        {children}
      </span>
    )
  },
)

SidebarItem.displayName = 'Sidebar.Item'
