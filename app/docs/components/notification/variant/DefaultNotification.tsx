'use client'
import { useState } from 'react'
import {
  Button,
  Notification,
  NotificationBody,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from '../../../../src'

const DefaultNotification = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <NotificationBody>
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

const DefaultNotificationCode = `
'use client'
import { useState } from 'react'
import {
  Button,
  Notification,
  NotificationBody,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from 'keep-react'

export const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <NotificationBody>
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

export { DefaultNotification, DefaultNotificationCode }
