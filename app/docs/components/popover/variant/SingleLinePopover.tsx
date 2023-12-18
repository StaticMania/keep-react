'use client'
import { Button, Popover } from '~/src'

const SingleLinePopover = () => {
  return (
    <div className="px-2 py-3">
      <Popover className="w-full">
        <Popover.Title>Single line message</Popover.Title>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </Popover>
    </div>
  )
}

const SingleLinePopoverCode = `
"use client";
import { Button, Popover } from "keep-react";

export const PopoverComponent = () => {
  return (
    <Popover className="w-full">
      <Popover.Title>Single line message</Popover.Title>
      <Popover.Action>
        <Button size="xs">Popover</Button>
      </Popover.Action>
    </Popover>
  )
}
`
export { SingleLinePopover, SingleLinePopoverCode }
