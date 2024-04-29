'use client'
import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from '../../../../src'

const DefaultPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5  p-5">
      <Popover placement="left">
        <PopoverTrigger>
          <CaretLeft size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>demo_email@email.com</PopoverDescription>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </PopoverContent>
      </Popover>

      <Popover placement="right">
        <PopoverTrigger>
          <CaretRight size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>demo_email@email.com</PopoverDescription>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </PopoverContent>
      </Popover>
      <Popover placement="top">
        <PopoverTrigger>
          <CaretUp size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>demo_email@email.com</PopoverDescription>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverTrigger>
          <CaretDown size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4">
          <Avatar verified img="/images/avatar/avatar-3.png" />
          <div>
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>demo_email@email.com</PopoverDescription>
          </div>
          <Button size="xs" color="secondary" variant="outline">
            Follow
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const DefaultPopoverCode = `
'use client'
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from 'phosphor-react'
import { CaretRight } from 'phosphor-react'

export const PopoverComponent = () => { 
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <CaretRight size={20} />
      </PopoverTrigger>
      <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4">
        <Avatar verified img="/images/avatar/avatar-3.png" />
        <div>
          <PopoverHeading>Popover title</PopoverHeading>
          <PopoverDescription>demo_email@email.com</PopoverDescription>
        </div>
        <Button size="xs" color="secondary" variant="outline">
          Follow
        </Button>
      </PopoverContent>
    </Popover>
  )
}
`

export { DefaultPopover, DefaultPopoverCode }
