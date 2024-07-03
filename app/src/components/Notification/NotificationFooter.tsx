'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const NotificationFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('mt-3 flex items-center gap-2', className)} ref={ref}>
        {children}
      </div>
    )
  },
)
NotificationFooter.displayName = 'NotificationFooter'

export { NotificationFooter }
