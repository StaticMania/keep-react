'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button, Notification } from '../../../../src'

const NotificationWithCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <Notification.Body className="max-w-xs">
          <Notification.Header className="mb-2 overflow-hidden rounded-lg">
            <Image src="https://via.placeholder.com/600x400" alt="image" width={600} height={400} />
          </Notification.Header>
          <Notification.Content>
            <Notification.Title>Can we store cookies?</Notification.Title>
            <Notification.Description>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Notification.Description>
          </Notification.Content>
          <Notification.Footer>
            <Button onClick={control} size="sm">
              Accept
            </Button>
            <Button onClick={control} variant="outline" size="sm">
              Review
            </Button>
          </Notification.Footer>
        </Notification.Body>
      </Notification>
    </div>
  )
}

const NotificationWithCardCode = `
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Button, Notification } from 'keep-react'


export const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <Notification.Body className="max-w-xs">
          <Notification.Header className="mb-2 overflow-hidden rounded-lg">
            <Image src="https://via.placeholder.com/600x400" alt="image" width={600} height={400} />
          </Notification.Header>
          <Notification.Content>
            <Notification.Title>Can we store cookies?</Notification.Title>
            <Notification.Description>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Notification.Description>
          </Notification.Content>
          <Notification.Footer>
            <Button onClick={control} size="sm">
              Accept
            </Button>
            <Button onClick={control} variant="outline" size="sm">
              Review
            </Button>
          </Notification.Footer>
        </Notification.Body>
      </Notification>
    </div>
  )
}

`

export { NotificationWithCard, NotificationWithCardCode }
