'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

const NavbarContainer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn('container flex items-center justify-between', className)} ref={ref}>
        {children}
      </div>
    )
  },
)

NavbarContainer.displayName = 'NavbarContainer'

export { NavbarContainer }
