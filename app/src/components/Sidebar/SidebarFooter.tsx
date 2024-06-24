'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const SidebarFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        className={cn('flex items-center gap-2 border-t border-t-metal-100 pt-4 dark:border-t-metal-800', className)}
        ref={ref}>
        {children}
      </div>
    )
  },
)

SidebarFooter.displayName = 'SidebarFooter'

export { SidebarFooter }
