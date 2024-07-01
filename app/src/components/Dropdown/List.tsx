'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export const DropdownList = forwardRef<HTMLUListElement, HTMLProps<HTMLUListElement>>(function List(
  { children, className, ...props },
  ref,
) {
  return (
    <ul {...props} ref={ref} className={cn(className)}>
      {children}
    </ul>
  )
})
DropdownList.displayName = 'Dropdown.List'
