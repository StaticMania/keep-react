'use client'
import Image from 'next/image'
import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import { Button, Popover } from '../../../../src'

const CardPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <Popover.Action>
          <CaretLeft size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              You can customize the styles and behavior of this component according to your requirements.
            </Popover.Description>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </Popover.Content>
      </Popover>
      <Popover placement="right">
        <Popover.Action>
          <CaretRight size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              You can customize the styles and behavior of this component according to your requirements.
            </Popover.Description>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </Popover.Content>
      </Popover>
      <Popover placement="top">
        <Popover.Action>
          <CaretUp size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              You can customize the styles and behavior of this component according to your requirements.
            </Popover.Description>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </Popover.Content>
      </Popover>
      <Popover placement="bottom">
        <Popover.Action>
          <CaretDown size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              You can customize the styles and behavior of this component according to your requirements.
            </Popover.Description>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  )
}

const CardPopoverCode = `
'use client'
import Image from 'next/image'
import { Button, Popover } from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover placement="left">
      <Popover.Action>
          <CaretLeft size={20} />
      </Popover.Action>
      <Popover.Content className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              You can customize the styles and behavior of this component according to your requirements.
            </Popover.Description>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
      </Popover.Content>
    </Popover>
  )
}
`

export { CardPopover, CardPopoverCode }
