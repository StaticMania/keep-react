'use client'
import { CaretDown, CaretLeft, CaretRight, CaretUp, Confetti } from 'phosphor-react'
import { Button, Popover, Typography } from '../../../../src'

const IconPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <Popover.Action>
          <CaretLeft size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
          </div>
          <Typography variant="p" className="mt-5 text-body-4 font-normal text-metal-600">
            Step - 1 / 5
          </Typography>
          <Typography className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </Typography>
        </Popover.Content>
      </Popover>
      <Popover placement="right">
        <Popover.Action>
          <CaretRight size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
          </div>
          <Typography variant="p" className="mt-5 text-body-4 font-normal text-metal-600">
            Step - 1 / 5
          </Typography>
          <Typography className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </Typography>
        </Popover.Content>
      </Popover>
      <Popover placement="top">
        <Popover.Action>
          <CaretUp size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
          </div>
          <Typography variant="p" className="mt-5 text-body-4 font-normal text-metal-600">
            Step - 1 / 5
          </Typography>
          <Typography className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </Typography>
        </Popover.Content>
      </Popover>
      <Popover placement="bottom">
        <Popover.Action>
          <CaretDown size={20} />
        </Popover.Action>
        <Popover.Content className="z-20 max-w-xs rounded-xl bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
            <Confetti size={24} color="#fff" weight="fill" />
          </div>
          <div className="pt-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
          </div>
          <Typography variant="p" className="mt-5 text-body-4 font-normal text-metal-600">
            Step - 1 / 5
          </Typography>
          <Typography className="flex items-center justify-between gap-5 pt-6">
            <Button color="secondary" size="xs" variant="outline" className="w-full">
              Skip
            </Button>
            <Button color="primary" size="xs" className="w-full">
              Next
            </Button>
          </Typography>
        </Popover.Content>
      </Popover>
    </div>
  )
}

const IconPopoverCode = `
'use client'
import { CaretLeft } from 'phosphor-react'
import { Button, Popover, Typography } from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover placement="left">
      <Popover.Action>
        <CaretLeft size={20} />
      </Popover.Action>
      <Popover.Content className="max-w-xs z-20 rounded-xl bg-white p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500">
          <Confetti size={24} color="#fff" weight="fill" />
        </div>
        <div className="pt-4">
          <Popover.Title>Popover title</Popover.Title>
          <Popover.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since
          </Popover.Description>
        </div>
        <Typography variant="p" className="mt-5 text-body-4 font-normal text-metal-600">
          Step - 1 / 5
        </Typography>
        <Typography className="flex items-center justify-between gap-5 pt-6">
          <Button color="secondary" size="xs" variant="outline" className="w-full">
            Skip
          </Button>
          <Button color="primary" size="xs" className="w-full">
            Next
          </Button>
        </Typography>
      </Popover.Content>
    </Popover>
  )
}`

export { IconPopover, IconPopoverCode }
