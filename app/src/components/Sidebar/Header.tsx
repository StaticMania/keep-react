'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn(sidebarTheme.header, className)}>
      {children}
    </div>
  )
})

Header.displayName = 'Sidebar.Header'
