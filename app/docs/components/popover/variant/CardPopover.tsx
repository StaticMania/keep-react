'use client'
import Image from 'next/image'
import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import { Button, Popover, PopoverContent, PopoverDescription, PopoverHeading, PopoverTrigger } from '../../../../src'

const CardPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <PopoverTrigger>
          <CaretLeft size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="right">
        <PopoverTrigger>
          <CaretRight size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="top">
        <PopoverTrigger>
          <CaretUp size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverTrigger>
          <CaretDown size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const CardPopoverCode = `
'use client'
import Image from 'next/image'
import { CaretRight } from 'phosphor-react'
import { Button, Popover, PopoverContent, PopoverDescription, PopoverHeading, PopoverTrigger } from 'keep-react'


export const PopoverComponent = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
          <CaretLeft size={20} />
      </PopoverTrigger>
      <PopoverContent className="z-20 max-w-[300px] rounded-xl bg-white shadow-md">
          <Image
            src="https://via.placeholder.com/600x400"
            className="rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
          <div className="space-y-3 p-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              You can customize the styles and behavior of this component according to your requirements.
            </PopoverDescription>
            <Button size="sm" color="primary">
              Learn More
            </Button>
          </div>
      </PopoverContent>
    </Popover>
  )
}
`

export { CardPopover, CardPopoverCode }
