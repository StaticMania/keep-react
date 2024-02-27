'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn('mb-2', className)}>
      {children}
    </div>
  )
})

Header.displayName = 'Sidebar.Header'
