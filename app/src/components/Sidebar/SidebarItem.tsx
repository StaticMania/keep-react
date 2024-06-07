'use client'
import { Children, forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../helpers/cn'

export interface SidebarItemProps extends HTMLAttributes<HTMLLIElement> {
  dropdown?: boolean
}

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>(
  ({ children, className, dropdown = false, ...props }, ref: Ref<HTMLLIElement>) => {
    const childrenLength: number = Children.count(children)
    return (
      <li
        {...props}
        className={cn(
          dropdown
            ? ''
            : 'flex cursor-pointer items-center gap-3 rounded-md p-2.5 text-body-4 font-normal text-metal-400 transition-all duration-200 hover:bg-metal-50 hover:text-metal-900 dark:hover:bg-metal-800 dark:hover:text-white',
          childrenLength >= 2 ? '' : 'justify-center',
          className,
        )}
        ref={ref}>
        {children}
      </li>
    )
  },
)

SidebarItem.displayName = 'SidebarItem'
