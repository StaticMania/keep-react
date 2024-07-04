'use client'
import { Placement } from '@floating-ui/react'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { DropdownContext, useDropdown } from './Context'

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  showArrow?: boolean
  placement?: Placement
  trigger?: 'hover' | 'focus' | 'click'
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
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

Dropdown.displayName = 'Dropdown'

export { Dropdown }
