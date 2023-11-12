'use client'
import { Button, Popover } from '~/src'

const SingleLinePopover = () => {
  return (
    <div className="px-3 py-2">
      <Popover
        customClass="!w-[20rem]"
        additionalContent={
          <h2 className="text-lg font-medium leading-6 tracking-[-0.3px] text-slate-500">Single line message</h2>
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
      customClass="!w-[20rem]"
      additionalContent={
        <h2 className="text-lg leading-6 tracking-[-0.3px] font-medium text-slate-500">
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
