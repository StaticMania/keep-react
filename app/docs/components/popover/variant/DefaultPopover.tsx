'use client'
import { Button, Popover } from '~/src'

const DefaultPopover = () => {
  return (
    <div className="px-3 py-2">
      <Popover
        title="Popover title here"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
        additionalContent={
          <div className="mt-3 flex items-center gap-3">
            <Button type="outlinePrimary" size="xs">
              Checkout
            </Button>
            <button className="text-body-5 font-medium text-primary-400 underline underline-offset-[3px]">
              Skip Now
            </button>
          </div>
        }>
        <Button size="xs">Popover</Button>
      </Popover>
    </div>
  )
}

const DefaultPopoverCode = `
"use client";
import { Button, Popover } from "keep-react";

export const PopoverComponent = () => {
  return (
    <Popover
      title="Popover title here"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      additionalContent={
        <div className="flex items-center gap-3 mt-3">
          <Button type="outlinePrimary" size="xs">
            Checkout
          </Button>
          <button className="text-body-5 font-medium underline text-primary-400 underline-offset-[3px]">
            Skip Now
          </button>
        </div>
      }
    >
      <Button size="xs">Popover</Button>
    </Popover>
  );
}
`

export { DefaultPopover, DefaultPopoverCode }
