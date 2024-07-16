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

const NotificationPosition = () => {
  return (
    <div className="flex items-center gap-5 px-5 py-3">
      <Notification position="bottom-left">
        <NotificationAction>Bottom Left</NotificationAction>
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
      <Notification position="bottom-right">
        <NotificationAction>Bottom Right</NotificationAction>
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
      <Notification position="top-left">
        <NotificationAction>Top Left</NotificationAction>
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
      <Notification position="top-right">
        <NotificationAction>Top Right</NotificationAction>
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
      <Notification position="center">
        <NotificationAction>Center</NotificationAction>
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

const NotificationPositionCode = `
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
} from 'keep-react'

export const NotificationComponent = () => {
  return (
    <Notification position="bottom-right">
      <NotificationAction>Bottom Right</NotificationAction>
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
  )
}
`

export { NotificationPosition, NotificationPositionCode }
