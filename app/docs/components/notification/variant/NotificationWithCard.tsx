'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  Button,
  Notification,
  NotificationBody,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationHeader,
  NotificationTitle,
} from '../../../../src'

const NotificationWithCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <NotificationBody className="max-w-xs">
          <NotificationHeader className="mb-2 overflow-hidden rounded-lg">
            <Image src="https://via.placeholder.com/600x400" alt="image" width={600} height={400} />
          </NotificationHeader>
          <NotificationContent>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </NotificationDescription>
          </NotificationContent>
          <NotificationFooter>
            <Button onClick={control} size="sm">
              Accept
            </Button>
            <Button onClick={control} variant="outline" size="sm">
              Review
            </Button>
          </NotificationFooter>
        </NotificationBody>
      </Notification>
    </div>
  )
}

const NotificationWithCardCode = `
'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  Button,
  Notification,
  NotificationBody,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationHeader,
  NotificationTitle,
} from 'keep-react'


export const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <NotificationBody className="max-w-xs">
          <NotificationHeader className="mb-2 overflow-hidden rounded-lg">
            <Image src="https://via.placeholder.com/600x400" alt="image" width={600} height={400} />
          </NotificationHeader>
          <NotificationContent>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </NotificationDescription>
          </NotificationContent>
          <NotificationFooter>
            <Button onClick={control} size="sm">
              Accept
            </Button>
            <Button onClick={control} variant="outline" size="sm">
              Review
            </Button>
          </NotificationFooter>
        </NotificationBody>
      </Notification>
    </div>
  )
}

`

export { NotificationWithCard, NotificationWithCardCode }
