'use client'
import { Button, Popover } from '~/src'

const SingleLinePopover = () => {
  return (
    <div className="px-3 py-2">
      <Popover
        className="!w-[20rem]"
        additionalContent={
          <h2 className="text-body-3 font-medium leading-6 tracking-[-0.3px] text-metal-500">Single line message</h2>
        }>
        <Button size="xs">Popover</Button>
      </Popover>
    </div>
  )
}

const SingleLinePopoverCode = `
"use client";
import { Button, Popover } from "keep-react";

export const PopoverComponent = () => {
  return (
    <Popover
      className="!w-[20rem]"
      additionalContent={
        <h2 className="text-body-3 leading-6 tracking-[-0.3px] font-medium text-metal-500">
          Single line message
        </h2>
      }
    >
      <Button size="xs">Popover</Button>
    </Popover>
  );
}
`
export { SingleLinePopover, SingleLinePopoverCode }
