'use client'
import {
  Avatar,
  AvatarImage,
  Button,
  Popover,
  PopoverAction,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
} from '../../../../src'

const DefaultPopover = () => {
  return (
    <div className="flex h-52 items-center justify-center gap-5 p-5">
      <Popover>
        <PopoverAction asChild>
          <Button>Open Popover</Button>
        </PopoverAction>
        <PopoverContent className="flex items-center gap-3 bg-white p-5 dark:bg-metal-900">
          <div>
            <Avatar>
              <AvatarImage src="/images/avatar/avatar-3.png" />
            </Avatar>
          </div>
          <div>
            <PopoverTitle>Keep Designer</PopoverTitle>
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
  PopoverTitle,
  PopoverAction,
} from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover>
      <PopoverAction asChild>
        <Button>Open Popover</Button>
      </PopoverAction>
      <PopoverContent className="flex items-center gap-3 bg-white p-5 dark:bg-metal-900">
        <div>
          <Avatar>
            <AvatarImage src="/images/avatar/avatar-3.png" />
          </Avatar>
        </div>
        <div>
          <PopoverTitle>Keep Designer</PopoverTitle>
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
