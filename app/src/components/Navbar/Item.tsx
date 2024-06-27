'use client'
import { cloneElement, forwardRef, HTMLAttributes, isValidElement, Ref } from 'react'
import { cn } from '../../helpers/cn'

export interface NavbarItemProps extends HTMLAttributes<HTMLLIElement> {
  active?: boolean
  asChild?: boolean
}

export const NavbarItem = forwardRef<HTMLLIElement, NavbarItemProps>(
  ({ children, className, active, asChild, ...props }, ref: Ref<HTMLLIElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, props)
    }

    return (
      <li
        {...props}
        className={cn(
          'cursor-pointer rounded-md bg-transparent px-4 py-2 text-body-4 font-medium transition-all duration-300 active:scale-95',
          active
            ? 'bg-metal-900 text-white hover:bg-metal-800 dark:bg-white dark:text-metal-900 dark:hover:bg-white'
            : 'text-metal-700 hover:bg-metal-100 hover:text-metal-900 dark:text-white dark:hover:bg-white dark:hover:text-metal-900',
          className,
        )}
        ref={ref}>
        {children}
      </li>
    )
  },
)

NavbarItem.displayName = 'Navbar.Item'
