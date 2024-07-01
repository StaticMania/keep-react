'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { dropdownTheme } from './theme'

export const DropdownItem = forwardRef<HTMLLIElement, HTMLProps<HTMLLIElement>>(function Item(
  { children, className, ...props },
  ref,
) {
  return (
    <li {...props} ref={ref} className={cn(dropdownTheme.item, className)}>
      {children}
    </li>
  )
})
DropdownItem.displayName = 'Dropdown.Item'
