'use client'
import { ReactNode } from 'react'
import { PopoverContext, PopoverOptions, usePopover } from './Context'

function Popover({
  children,
  modal = false,
  ...restOptions
}: {
  children: ReactNode
} & PopoverOptions) {
  const popover = usePopover({ modal, ...restOptions })
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>
}

export { Popover }
