'use client'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../helpers/cn'

export interface NavbarItemProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean
}

export const NavbarItem = forwardRef<HTMLLIElement, NavbarItemProps>(
  ({ children, className, active, ...props }, ref: Ref<HTMLLIElement>) => {
    return (
      <li
        {...props}
        className={cn(
          'cursor-pointer rounded-md bg-transparent px-4 py-2 text-body-4 font-medium transition-all duration-300 active:scale-95',
          active
            ? 'bg-metal-900 text-white hover:bg-metal-800'
            : 'text-metal-700 hover:bg-metal-100 hover:text-metal-900',
          className,
        )}
        ref={ref}>
        {children}
      </li>
    )
  },
)

NavbarItem.displayName = 'Navbar.Item'
