'use client'
import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import { Avatar, Button, Popover } from '../../../../src'

const DefaultPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 bg-metal-900 p-5">
      <Popover placement="left">
        <Popover.Action>
          <CaretLeft size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 flex items-center gap-3 rounded-xl border bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>demo_email@email.com</Popover.Description>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </Popover.Content>
      </Popover>
      <Popover placement="right">
        <Popover.Action>
          <CaretRight size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 flex items-center gap-3 rounded-xl border bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>demo_email@email.com</Popover.Description>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </Popover.Content>
      </Popover>
      <Popover placement="top">
        <Popover.Action>
          <CaretUp size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 flex items-center gap-3 rounded-xl border bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>demo_email@email.com</Popover.Description>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </Popover.Content>
      </Popover>
      <Popover placement="bottom">
        <Popover.Action>
          <CaretDown size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 flex items-center gap-3 rounded-xl border bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>demo_email@email.com</Popover.Description>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </Popover.Content>
      </Popover>
    </div>
  )
}

const DefaultPopoverCode = `
'use client'
import { Popover } from 'keep-react'
import { CaretRight } from 'phosphor-react'

export const PopoverComponent = () => { 
  return (
    <Popover placement="right">
      <Popover.Action>
        <CaretRight size={20} />
      </Popover.Action>
      <Popover.Content className="z-20 flex items-center gap-3 rounded-xl border bg-white p-4">
        <Avatar verified img="/images/avatar/avatar-3.png" />
        <div>
          <Popover.Title>Popover title</Popover.Title>
          <Popover.Description>demo_email@email.com</Popover.Description>
        </div>
        <Button size="xs" color="secondary" variant="outline">
          Follow
        </Button>
      </Popover.Content>
    </Popover>
  )
}
`

export { DefaultPopover, DefaultPopoverCode }
