'use client'
import { Button, Popover } from '~/src'

const PopoverPosition = () => {
  return (
    <div className="px-3 py-2">
      <Popover
        position="right-end"
        title="Popover title here"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour">
        <Button size="xs">Popover</Button>
      </Popover>
    </div>
  )
}

const PopoverPositionCode = `
"use client";
import { Button, Popover } from "keep-react";

export const PopoverComponent = () => {
  return (
    <Popover
      position="right-end"
      title="Popover title here"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    >
      <Button size="xs">Popover</Button>
    </Popover>
  );
}
`

export { PopoverPosition, PopoverPositionCode }
