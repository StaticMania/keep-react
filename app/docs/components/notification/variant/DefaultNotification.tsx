'use client'
import {
  Button,
  Notification,
  NotificationAction,
  NotificationContent,
  NotificationDescription,
  NotificationTitle,
} from '../../../../src'

const DefaultNotification = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Notification>
        <NotificationAction asChild>
          <Button>Open Notification</Button>
        </NotificationAction>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
        </NotificationContent>
      </Notification>
    </div>
  )
}

const DefaultNotificationCode = {
  'NotificationComponent.tsx': `
import {
  Button,
  Notification,
  NotificationAction,
  NotificationContent,
  NotificationDescription,
  NotificationTitle,
} from 'keep-react'

export const NotificationComponent = () => {
  return (
    <Notification>
      <NotificationAction asChild>
        <Button>Open Notification</Button>
      </NotificationAction>
      <NotificationContent>
        <NotificationTitle>Can we store cookies?</NotificationTitle>
        <NotificationDescription>
          Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </NotificationDescription>
      </NotificationContent>
    </Notification>
  )
}
`,
}

export { DefaultNotification, DefaultNotificationCode }
