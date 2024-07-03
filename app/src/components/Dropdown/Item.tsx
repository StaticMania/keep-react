'use client'
import { HTMLProps, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { dropdownTheme } from './theme'

export interface DropdownItemProps extends HTMLProps<HTMLLIElement> {
  asChild?: boolean
}

const DropdownItem = forwardRef<HTMLLIElement, DropdownItemProps>(({ children, asChild, className, ...props }, ref) => {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      itemRef: ref,
      ...props,
    })
  }

  return (
    <li {...props} ref={ref} className={cn(dropdownTheme.item, className)}>
      {children}
    </li>
  )
})

DropdownItem.displayName = 'DropdownItem'

export { DropdownItem }
