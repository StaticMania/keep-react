'use client'
import { Button, Popover } from '~/src'

const PopoverPosition = () => {
  return (
    <div className="px-2 py-3">
      <Popover position="right-end">
        <Popover.Title>Popover title here</Popover.Title>
        <Popover.Description>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour
        </Popover.Description>
        <Popover.Container>
          <Button type="outlinePrimary" size="xs">
            Checkout
          </Button>
        </Popover.Container>
        <Popover.Action>
          <Button size="xs">Popover</Button>
        </Popover.Action>
      </Popover>
    </div>
  )
}

const PopoverPositionCode = `
"use client";
import { Button, Popover } from "keep-react";

export const PopoverComponent = () => {
  return (
    <Popover position='right-end'>
      <Popover.Title>Popover title here</Popover.Title>
      <Popover.Description>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
        some form, by injected humour
      </Popover.Description>
      <Popover.Container>
        <Button type="outlinePrimary" size="xs">
          Checkout
        </Button>
      </Popover.Container>
      <Popover.Action>
        <Button size="xs">Popover</Button>
      </Popover.Action>
    </Popover>
  )
}
`

export { PopoverPosition, PopoverPositionCode }
