'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

export const Body = forwardRef<HTMLDivElement, BodyProps>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn(sidebarTheme.body, className)}>
      {children}
    </div>
  )
})

Body.displayName = 'Sidebar.Body'
