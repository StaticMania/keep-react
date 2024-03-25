'use client'
import Image from 'next/image'
import { CaretDown, CaretLeft, CaretRight, CaretUp } from 'phosphor-react'
import CardImg from '../../../../../public/images/card.jpg'
import { Button, Popover } from '../../../../src'

const CardPopover = () => {
  return (
    <div className="flex h-44 items-center justify-center gap-5 p-5">
      <Popover placement="left">
        <Popover.Action>
          <CaretLeft size={20} />
        </Popover.Action>
        <Popover.Content>
          <Image src={CardImg} alt="card" className="rounded-t-xl" />
          <div className="space-y-1.5 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
            <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
            <div className="flex items-center justify-between gap-5 pt-6">
              <Button color="secondary" size="xs" variant="outline" className="w-full">
                Skip
              </Button>
              <Button color="primary" size="xs" className="w-full">
                Next
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover>
      <Popover placement="right">
        <Popover.Action>
          <CaretRight size={20} />
        </Popover.Action>
        <Popover.Content>
          <Image src={CardImg} alt="card" className="rounded-t-xl" />
          <div className="space-y-1.5 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
            <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
            <div className="flex items-center justify-between gap-5 pt-6">
              <Button color="secondary" size="xs" variant="outline" className="w-full">
                Skip
              </Button>
              <Button color="primary" size="xs" className="w-full">
                Next
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover>
      <Popover placement="top">
        <Popover.Action>
          <CaretUp size={20} />
        </Popover.Action>
        <Popover.Content>
          <Image src={CardImg} alt="card" className="rounded-t-xl" />
          <div className="space-y-1.5 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
            <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
            <div className="flex items-center justify-between gap-5 pt-6">
              <Button color="secondary" size="xs" variant="outline" className="w-full">
                Skip
              </Button>
              <Button color="primary" size="xs" className="w-full">
                Next
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover>
      <Popover placement="bottom">
        <Popover.Action>
          <CaretDown size={20} />
        </Popover.Action>
        <Popover.Content>
          <Image src={CardImg} alt="card" className="rounded-t-xl" />
          <div className="space-y-1.5 p-4">
            <Popover.Title>Popover title</Popover.Title>
            <Popover.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since
            </Popover.Description>
            <p className="mt-5 text-body-4 font-normal text-metal-600">Step - 1 / 5</p>
            <div className="flex items-center justify-between gap-5 pt-6">
              <Button color="secondary" size="xs" variant="outline" className="w-full">
                Skip
              </Button>
              <Button color="primary" size="xs" className="w-full">
                Next
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  )
}

const CardPopoverCode = `
'use client'
import Image from 'next/image'
import CardImg from '@/public/images/card.jpg'
import { Button, Popover } from 'keep-react'

export const PopoverComponent = () => {
  return (
    <Popover placement="left">
      <Popover.Action>
          <CaretLeft size={20} />
      </Popover.Action>
      <Popover.Content>
        <Image src={CardImg} alt="card" className="rounded-t-xl" />
        <div className="space-y-1.5 p-4">
          <Popover.Title>Popover title</Popover.Title>
          <Popover.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since
          </Popover.Description>
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
        </div>
      </Popover.Content>
    </Popover>
  )
}
`

export { CardPopover, CardPopoverCode }
