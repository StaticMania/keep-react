'use client'
import { Placement } from '@floating-ui/react'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { DropdownAction } from './Action'
import { DropdownContext, useDropdown } from './Context'
import { DropdownItem } from './Item'
import { DropdownList } from './List'

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  showArrow?: boolean
  placement?: Placement
  trigger?: 'hover' | 'focus' | 'click'
}

export const DropdownComponent = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, showArrow = false, className, placement = 'bottom-start', trigger = 'click', ...props }, ref) => {
    const dropdownOptions = useDropdown({ showArrow, placement, trigger })

    return (
      <DropdownContext.Provider value={{ ...dropdownOptions }}>
        <div className={cn(className)} {...props} ref={ref}>
          {children}
        </div>
      </DropdownContext.Provider>
    )
  },
)

DropdownComponent.displayName = 'Dropdown'

export const Dropdown = Object.assign(DropdownComponent, {
  List: DropdownList,
  Item: DropdownItem,
  Action: DropdownAction,
})
