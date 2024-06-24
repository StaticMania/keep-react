'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const NavbarList = forwardRef<HTMLOListElement, LiHTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul ref={ref} {...props} className={cn('hidden items-center gap-2.5 lg:flex', className)}>
        {children}
      </ul>
    )
  },
)
NavbarList.displayName = 'Navbar.List'

export { NavbarList }
