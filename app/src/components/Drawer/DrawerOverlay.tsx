'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const DrawerOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} ref={ref} className={cn('fixed inset-0 z-50 bg-metal-900 bg-opacity-50', className)}>
        {children}
      </div>
    )
  },
)

DrawerOverlay.displayName = 'DrawerOverlay'

export { DrawerOverlay }
