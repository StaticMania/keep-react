'use client'
import { CaretDown, CaretLeft, CaretRight, CaretUp, Confetti } from 'phosphor-react'
import { Button, Popover, PopoverContent, PopoverDescription, PopoverHeading, PopoverTrigger } from '../../../../src'

const IconPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <PopoverTrigger>
          <CaretLeft size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="right">
        <PopoverTrigger>
          <CaretRight size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="top">
        <PopoverTrigger>
          <CaretUp size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverTrigger>
          <CaretDown size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <PopoverHeading>Popover title</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

const IconPopoverCode = `
'use client'
import { CaretLeft } from 'phosphor-react'
import { Button, Popover, PopoverContent, PopoverDescription, PopoverHeading, PopoverTrigger } from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <CaretLeft size={20} />
      </PopoverTrigger>
      <PopoverContent className="max-w-xs z-20 rounded-xl bg-white p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
          <Confetti size={24} color="#fff" weight="fill" />
        </div>
        <div className="pt-4">
          <PopoverTitle>Popover title</PopoverTitle>
          <PopoverDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since
          </PopoverDescription>
        </div>
        <p className="mt-5 text-body-4 font-normal text-metal-600">
          Step - 1 / 5
        </p>
        <div className="flex items-center justify-between gap-5 pt-6">
          <Button color="secondary" size="xs" variant="outline" className="w-full">
            Skip
          </Button>
          <Button color="primary" size="xs" className="w-full">
            Next
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}`

export { IconPopover, IconPopoverCode }
