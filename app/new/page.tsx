'use client'

import Image from 'next/image'
import { Confetti } from 'phosphor-react'
import CardImg from '../../public/images/card.jpg'
import { Avatar, Button, Typography } from '../src'
import { Popover } from './Popover'

const New = () => {
  return (
    <section className="grid h-screen place-items-center">
      <div className="container flex items-center gap-x-10">
        <Popover>
          <Popover.Action>Action</Popover.Action>
          <Popover.Content>
            <Image src={CardImg} alt="card" className="rounded-t-xl" />
            <div className="space-y-1.5 p-4">
              <Popover.Title>Popover title</Popover.Title>
              <Popover.Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since
              </Popover.Description>
              <Typography variant="p" className="mt-5 text-body-5 font-normal text-metal-600">
                Step - 1 / 5
              </Typography>
              <Typography className="flex items-center justify-between gap-5 pt-6">
                <Button color="secondary" size="sm" variant="outline" className="w-full">
                  Skip
                </Button>
                <Button color="primary" size="sm" className="w-full">
                  Next
                </Button>
              </Typography>
            </div>
          </Popover.Content>
        </Popover>
        <Popover>
          <Popover.Action>Action</Popover.Action>
          <Popover.Content className="flex items-center gap-3 rounded-xl bg-white p-4">
            <Avatar verified img="./images/avatar/avatar-3.png" />
            <div>
              <Popover.Title>Popover title</Popover.Title>
              <Popover.Description>demo_email@email.com</Popover.Description>
            </div>
            <Button size="xs" color="secondary" variant="outline">
              Follow
            </Button>
          </Popover.Content>
        </Popover>
        <Popover>
          <Popover.Action>Action</Popover.Action>
          <Popover.Content className="max-w-xs rounded-xl bg-white p-4">
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
            <Typography variant="p" className="mt-5 text-body-5 font-normal text-metal-600">
              Step - 1 / 5
            </Typography>
            <Typography className="flex items-center justify-between gap-5 pt-6">
              <Button color="secondary" size="sm" variant="outline" className="w-full">
                Skip
              </Button>
              <Button color="primary" size="sm" className="w-full">
                Next
              </Button>
            </Typography>
          </Popover.Content>
        </Popover>
      </div>
    </section>
  )
}

export default New
