'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn(sidebarTheme.footer, className)}>
      {children}
    </div>
  )
})

Footer.displayName = 'Sidebar.Footer'
