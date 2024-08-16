'use client'
import { Placement } from '@floating-ui/react'
import { FC, ReactNode } from 'react'
import { DropdownContext, useDropdown } from './Context'

interface DropdownProps {
  children: ReactNode
  showArrow?: boolean
  placement?: Placement
  trigger?: 'hover' | 'focus' | 'click'
}

const Dropdown: FC<DropdownProps> = ({
  children,
  showArrow = false,
  placement = 'bottom-start',
  trigger = 'click',
}) => {
  const dropdownOptions = useDropdown({ showArrow, placement, trigger })

  return (
    <DropdownContext.Provider value={{ ...dropdownOptions }}>
      <div>{children}</div>
    </DropdownContext.Provider>
  )
}

export { Dropdown }
