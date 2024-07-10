import {
  Button,
  Notification,
  NotificationAction,
  NotificationBody,
  NotificationClose,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from '../../../../src'

const DefaultNotification = () => {
  return (
    <div className="px-5 py-3">
      <Notification>
        <NotificationAction />
        <NotificationBody>
          <NotificationContent>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </NotificationDescription>
            <NotificationFooter>
              <NotificationClose asChild>
                <Button>Accept</Button>
              </NotificationClose>
              <NotificationClose asChild>
                <Button variant="outline">Review</Button>
              </NotificationClose>
            </NotificationFooter>
          </NotificationContent>
        </NotificationBody>
      </Notification>
    </div>
  )
}

const DefaultNotificationCode = `
import {
  Button,
  Notification,
  NotificationAction,
  NotificationBody,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from 'keep-react'

export const NotificationComponent = () => {
  return (
    <Notification>
      <NotificationAction />
      <NotificationBody>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
          <NotificationFooter>
            <NotificationClose asChild>
              <Button>Accept</Button>
            </NotificationClose>
            <NotificationClose asChild>
              <Button variant="outline">
                Review
              </Button>
            </NotificationClose>
          </NotificationFooter>
        </NotificationContent>
      </NotificationBody>
    </Notification>
  )
}

`

export { DefaultNotification, DefaultNotificationCode }
