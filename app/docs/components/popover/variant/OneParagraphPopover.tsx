'use client'
import { Button, Popover } from '~/src'

const OneParagraphPopover = () => {
  return (
    <div className="px-2 py-3">
      <Popover>
        <Popover.Description>There are many variations of passages of Lorem Ipsum available.</Popover.Description>
        <Popover.Container>
          <button className="mt-3 text-body-5 font-medium text-primary-400 underline underline-offset-[3px]">
            Skip Now
          </button>
        </Popover.Container>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </Popover>
    </div>
  )
}

const OneParagraphPopoverCode = `
"use client";
import { Button, Popover } from "keep-react";

export const PopoverComponent = () => {
  return (
    <Popover>
      <Popover.Description>There are many variations of passages of Lorem Ipsum available.</Popover.Description>
      <Popover.Container>
        <button className="mt-3 text-body-5 font-medium text-primary-400 underline underline-offset-[3px]">
          Skip Now
        </button>
      </Popover.Container>
      <Popover.Action>
        <Button size="xs">Popover</Button>
      </Popover.Action>
    </Popover>
  )
}
`

export { OneParagraphPopover, OneParagraphPopoverCode }
