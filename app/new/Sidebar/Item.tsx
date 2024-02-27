'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface ItemProps extends HTMLAttributes<HTMLSpanElement> {}

export const Item = forwardRef<HTMLSpanElement, ItemProps>(({ className, children, ...props }, ref) => {
  return (
    <span
      {...props}
      ref={ref}
      className={cn('flex items-center gap-2 py-2.5 text-body-3 font-medium text-metal-600', className)}>
      {children}
    </span>
  )
})

Item.displayName = 'Sidebar.Item'
