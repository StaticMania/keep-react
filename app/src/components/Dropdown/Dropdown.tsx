'use client'
import { DropdownMenuProps, Root } from '@radix-ui/react-dropdown-menu'
import { ComponentPropsWithoutRef, FC } from 'react'

const Dropdown: FC<DropdownMenuProps> = ({ children, ...props }) => {
  return (
    <Root modal={false} {...props}>
      {children}
    </Root>
  )
}

export { Dropdown }

export type DropdownProps = ComponentPropsWithoutRef<typeof Dropdown>
