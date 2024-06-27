'use client'
import { ReactNode } from 'react'
import { PopoverTrigger } from './Action'
import { PopoverClose } from './Close'
import { PopoverContent } from './Content'
import { PopoverContext, PopoverOptions, usePopover } from './Context'
import { PopoverDescription } from './Description'
import { PopoverHeading } from './Title'

function PopoverComponent({
  children,
  modal = false,
  ...restOptions
}: {
  children: ReactNode
} & PopoverOptions) {
  const popover = usePopover({ modal, ...restOptions })
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>
}

PopoverTrigger.displayName = 'Popover.Action'
PopoverContent.displayName = 'Popover.Content'
PopoverHeading.displayName = 'Popover.Title'
PopoverDescription.displayName = 'Popover.Description'
PopoverClose.displayName = 'Popover.Close'

export const Popover = Object.assign(PopoverComponent, {
  Action: PopoverTrigger,
  Content: PopoverContent,
  Title: PopoverHeading,
  Description: PopoverDescription,
  Close: PopoverClose,
})
