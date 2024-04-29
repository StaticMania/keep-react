'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export const SidebarFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={cn(sidebarTheme.footer, className)}>
        {children}
      </div>
    )
  },
)

SidebarFooter.displayName = 'Sidebar.Footer'
