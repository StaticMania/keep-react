'use client'
import { MotionProps } from 'framer-motion'
import { HTMLProps, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import { KeepSlot } from '../Helpers/KeepSlot'
import { dropdownTheme } from './theme'

export type DropdownItemProps = HTMLProps<HTMLDivElement> &
  MotionProps & {
    asChild?: boolean
  }

const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ children, asChild, onClick, className, ...props }, ref) => {
    const Slot = asChild && isValidElement(children) ? KeepSlot : 'div'
    return (
      <Slot {...props} ref={ref} className={cn(dropdownTheme.item, className)} role="menuitem" tabIndex={0}>
        {children}
      </Slot>
    )
  },
)

DropdownItem.displayName = 'DropdownItem'

export { DropdownItem }
