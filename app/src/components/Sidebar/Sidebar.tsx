'use client'
import { BaseHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { SidebarBody } from './Body'
import { SidebarFooter } from './Footer'
import { SidebarHeader } from './Header'
import { SidebarItem } from './Item'
import { sidebarTheme } from './theme'

const SidebarComponent = forwardRef<HTMLBaseElement, BaseHTMLAttributes<HTMLBaseElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <aside className={cn(sidebarTheme.root, className)} {...props} ref={ref}>
        {children}
      </aside>
    )
  },
)

SidebarComponent.displayName = 'Sidebar'

export const Sidebar = Object.assign(SidebarComponent, {
  Item: SidebarItem,
  Body: SidebarBody,
  Header: SidebarHeader,
  Footer: SidebarFooter,
})
