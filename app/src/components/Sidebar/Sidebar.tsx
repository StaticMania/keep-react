'use client'
import { BaseHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'
import { Item } from './Item'
import { sidebarTheme } from './theme'

export interface SideBarProps extends BaseHTMLAttributes<HTMLBaseElement> {}

const SidebarComponent = forwardRef<HTMLBaseElement, SideBarProps>(({ className, children, ...props }, ref) => {
  return (
    <aside className={cn(sidebarTheme.root, className)} {...props} ref={ref}>
      {children}
    </aside>
  )
})

SidebarComponent.displayName = 'Sidebar'

export const Sidebar = Object.assign(SidebarComponent, {
  Item,
  Body,
  Header,
  Footer,
})
