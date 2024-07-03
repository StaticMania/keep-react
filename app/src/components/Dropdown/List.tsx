'use client'
import { HTMLProps, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'

export interface DropdownListProps extends HTMLProps<HTMLUListElement> {
  asChild?: boolean
}

export const DropdownList = forwardRef<HTMLUListElement, DropdownListProps>(
  ({ children, className, asChild, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }
    return (
      <ul {...props} ref={ref} className={cn(className)}>
        {children}
      </ul>
    )
  },
)

DropdownList.displayName = 'DropdownList'
