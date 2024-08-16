'use client'
import { cloneElement, forwardRef, HTMLAttributes, isValidElement, Ref } from 'react'
import { cn } from '../../utils/cn'

export interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean
  asChild?: boolean
}

export const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ children, className, active, asChild, ...props }, ref: Ref<HTMLDivElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <div
        {...props}
        className={cn(
          'cursor-pointer rounded-md bg-transparent px-4 py-2 text-body-4 font-medium transition-all duration-300 active:scale-95',
          active
            ? 'bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600'
            : 'text-metal-600 hover:bg-metal-50 hover:text-metal-900 dark:text-white dark:hover:bg-primary-600 dark:hover:text-white',
          className,
        )}
        ref={ref}>
        {children}
      </div>
    )
  },
)

NavbarItem.displayName = 'NavbarItem'
