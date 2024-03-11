'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('mt-3 flex items-center gap-2', className)} ref={ref}>
        {children}
      </div>
    )
  },
)
Footer.displayName = 'Notification.Footer'
export { Footer }
