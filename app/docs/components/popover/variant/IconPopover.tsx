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
        <PopoverContent className="z-20 max-w-xs rounded-xl border border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900">
          <div className="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <Confetti size={24} weight="fill" />
          </div>
          <div className="space-y-2 pt-4">
            <PopoverHeading className="text-body-2 font-semibold">Keep Design System</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button variant="outline" className="w-full">
              Skip
            </Button>
            <Button className="w-full">Next</Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="right">
        <PopoverTrigger>
          <CaretRight size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-xs rounded-xl border border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900">
          <div className="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <Confetti size={24} weight="fill" />
          </div>
          <div className="space-y-2 pt-4">
            <PopoverHeading className="text-body-2 font-semibold">Keep Design System</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button variant="outline" className="w-full">
              Skip
            </Button>
            <Button className="w-full">Next</Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="top">
        <PopoverTrigger>
          <CaretUp size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-xs rounded-xl border border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900">
          <div className="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <Confetti size={24} weight="fill" />
          </div>
          <div className="space-y-2 pt-4">
            <PopoverHeading className="text-body-2 font-semibold">Keep Design System</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button variant="outline" className="w-full">
              Skip
            </Button>
            <Button className="w-full">Next</Button>
          </div>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverTrigger>
          <CaretDown size={20} />
        </PopoverTrigger>
        <PopoverContent className="z-20 max-w-xs rounded-xl border border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900">
          <div className="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <Confetti size={24} weight="fill" />
          </div>
          <div className="space-y-2 pt-4">
            <PopoverHeading className="text-body-2 font-semibold">Keep Design System</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button variant="outline" className="w-full">
              Skip
            </Button>
            <Button className="w-full">Next</Button>
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
      <PopoverContent className="z-20 max-w-xs rounded-xl border border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900">
          <div className="flex size-14 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
            <Confetti size={24} weight="fill" />
          </div>
          <div className="space-y-2 pt-4">
            <PopoverHeading className="text-body-2 font-semibold">Keep Design System</PopoverHeading>
            <PopoverDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </PopoverDescription>
          </div>
          <p className="mt-5 text-body-2 font-normal text-metal-600 dark:text-metal-300">Step - 1 / 5</p>
          <div className="flex items-center justify-between gap-5 pt-6">
            <Button variant="outline" className="w-full">
              Skip
            </Button>
            <Button className="w-full">Next</Button>
          </div>
      </PopoverContent>
    </Popover>
  )
}`

export { IconPopover, IconPopoverCode }
