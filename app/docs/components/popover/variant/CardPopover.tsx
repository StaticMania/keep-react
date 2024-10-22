'use client'
import Image from 'next/image'
import { Button, Popover, PopoverAction, PopoverContent, PopoverDescription, PopoverTitle } from '../../../../src'

const CardPopover = () => {
  return (
    <div className="flex h-52 items-center justify-center gap-5">
      <Popover>
        <PopoverAction asChild>
          <Button>Open Popover</Button>
        </PopoverAction>
        <PopoverContent className="max-w-[300px] bg-white dark:bg-metal-900">
          <Image src="/images/keep-card.jpg" className="rounded-t-xl" alt="image" width={600} height={300} />
          <div className="space-y-3 p-5">
            <PopoverTitle>Keep Design System</PopoverTitle>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button>Learn More</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const CardPopoverCode = {
  'PopoverComponent.tsx': `
import Image from 'next/image'
import { Button, Popover, PopoverContent, PopoverDescription, PopoverTitle, PopoverAction } from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover>
      <PopoverAction asChild>
        <Button>Open Popover</Button>
      </PopoverAction>
      <PopoverContent className="max-w-[300px] bg-white dark:bg-metal-900">
        <Image src="/images/keep-card.jpg" className="rounded-t-xl" alt="image" width={600} height={300} />
        <div className="space-y-3 p-5">
          <PopoverTitle>Keep Design System</PopoverTitle>
          <PopoverDescription>
            You can customize the styles and behavior of this component according to your requirements.
          </PopoverDescription>
          <Button>Learn More</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
`,
}

export { CardPopover, CardPopoverCode }
