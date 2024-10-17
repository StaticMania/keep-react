import {
  Button,
  Notification,
  NotificationAction,
  NotificationContent,
  NotificationDescription,
  NotificationTitle,
} from '../../../../src'

const NotificationPosition = () => {
  return (
    <div className="flex items-center justify-center gap-5 px-5 py-3">
      <Notification position="bottom-right">
        <NotificationAction asChild>
          <Button>Bottom Right</Button>
        </NotificationAction>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
        </NotificationContent>
      </Notification>
      <Notification position="bottom-left">
        <NotificationAction asChild>
          <Button>Bottom Left</Button>
        </NotificationAction>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
        </NotificationContent>
      </Notification>
      <Notification position="top-right">
        <NotificationAction asChild>
          <Button>Top Right</Button>
        </NotificationAction>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
        </NotificationContent>
      </Notification>
      <Notification position="top-left">
        <NotificationAction asChild>
          <Button>Top Left</Button>
        </NotificationAction>
        <NotificationContent>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
        </NotificationContent>
      </Notification>
      <Notification position="center">
        <NotificationAction asChild>
          <Button>Center</Button>
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

const NotificationPositionCode = {
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
    <Notification position="bottom-right">
      <NotificationAction asChild>
        <Button>Bottom Right</Button>
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

export { NotificationPosition, NotificationPositionCode }
