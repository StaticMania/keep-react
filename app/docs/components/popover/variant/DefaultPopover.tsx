'use client'
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverAction,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
} from '../../../../src'

const DefaultPopover = () => {
  return (
    <div className="flex h-52 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <PopoverAction>Left</PopoverAction>
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
        <PopoverAction>Right</PopoverAction>
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
        <PopoverAction>Top</PopoverAction>
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
        <PopoverAction>Bottom</PopoverAction>
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

const DefaultPopoverCode = {
  'PopoverComponent.tsx': `
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverAction,
} from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover placement="right">
      <PopoverAction>Right</PopoverAction>
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
`,
}

export { DefaultPopover, DefaultPopoverCode }
