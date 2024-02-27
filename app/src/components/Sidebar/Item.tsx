'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { sidebarTheme } from './theme'

export interface ItemProps extends HTMLAttributes<HTMLSpanElement> {}

export const Item = forwardRef<HTMLSpanElement, ItemProps>(({ className, children, ...props }, ref) => {
  return (
    <span {...props} ref={ref} className={cn(sidebarTheme.item, className)}>
      {children}
    </span>
  )
})

Item.displayName = 'Sidebar.Item'
