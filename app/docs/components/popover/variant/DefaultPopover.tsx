'use client'
import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from '../../../../src'

const DefaultPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <PopoverTrigger>
          <CaretLeft size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverHeading>Keep Designer</PopoverHeading>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </PopoverContent>
      </Popover>
      <Popover placement="right">
        <PopoverTrigger>
          <CaretRight size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverHeading>Keep Designer</PopoverHeading>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </PopoverContent>
      </Popover>
      <Popover placement="top">
        <PopoverTrigger>
          <CaretUp size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverHeading>Keep Designer</PopoverHeading>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverTrigger>
          <CaretDown size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverHeading>Keep Designer</PopoverHeading>
            <PopoverDescription>keepdesign@email.com</PopoverDescription>
          </div>
          <Button variant="outline">Follow</Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const DefaultPopoverCode = `
'use client'
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from 'keep-react'

import { CaretRight } from 'phosphor-react'

export const PopoverComponent = () => {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <CaretRight size={20} />
      </PopoverTrigger>
      <PopoverContent className="z-20 flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-metal-900">
        <div>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-3.png" />
          </Avatar>
        </div>
        <div>
          <PopoverHeading>Keep Designer</PopoverHeading>
          <PopoverDescription>keepdesign@email.com</PopoverDescription>
        </div>
        <Button variant="outline">Follow</Button>
      </PopoverContent>
    </Popover>
  )
}
`

export { DefaultPopover, DefaultPopoverCode }
