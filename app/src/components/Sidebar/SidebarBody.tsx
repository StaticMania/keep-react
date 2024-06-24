'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const SidebarBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('space-y-4', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

SidebarBody.displayName = 'SidebarBody'

export { SidebarBody }
