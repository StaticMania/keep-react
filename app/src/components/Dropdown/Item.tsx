'use client'
import { MotionProps } from 'framer-motion'
import { HTMLProps, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { dropdownTheme } from './theme'

export type DropdownItemProps = HTMLProps<HTMLLIElement> &
  MotionProps & {
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
