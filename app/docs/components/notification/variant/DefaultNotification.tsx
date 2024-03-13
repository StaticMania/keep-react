'use client'
import { useState } from 'react'
import { Button, Notification } from '../../../../src'

const DefaultNotification = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <Notification.Body>
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

const DefaultNotificationCode = `
'use client'
import { useState } from 'react'
import { Button, Notification } from 'keep-react'

export const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <Notification.Body>
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

export { DefaultNotification, DefaultNotificationCode }
