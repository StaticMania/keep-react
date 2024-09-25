import Image from 'next/image'
import {
  Button,
  Notification,
  NotificationAction,
  NotificationClose,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from '../../../../src'

const NotificationWithCard = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Notification>
        <NotificationAction asChild>
          <Button>Open Notification</Button>
        </NotificationAction>
        <NotificationContent className="mb-2 max-w-xs space-y-4 overflow-hidden rounded-xl">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="image"
            className="rounded-lg"
            width={600}
            height={400}
          />
          <div>
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </NotificationDescription>
          </div>
          <NotificationFooter>
            <NotificationClose asChild>
              <Button>Accept</Button>
            </NotificationClose>
            <NotificationClose asChild>
              <Button variant="outline">Review</Button>
            </NotificationClose>
          </NotificationFooter>
        </NotificationContent>
      </Notification>
    </div>
  )
}

const NotificationWithCardCode = {
  'NotificationComponent.tsx': `
import Image from 'next/image'
import {
  Button,
  Notification,
  NotificationAction,
  NotificationClose,
  NotificationContent,
  NotificationDescription,
  NotificationFooter,
  NotificationTitle,
} from 'keep-react'

export const NotificationComponent = () => {
  return (
    <Notification>
      <NotificationAction asChild>
        <Button>Open Notification</Button>
      </NotificationAction>
      <NotificationContent className="mb-2 max-w-xs space-y-4 overflow-hidden rounded-xl">
        <Image src="https://via.placeholder.com/600x400" alt="image" className="rounded-lg" width={600} height={400} />
        <div>
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
        </div>
        <NotificationFooter>
          <NotificationClose asChild>
            <Button>Accept</Button>
          </NotificationClose>
          <NotificationClose asChild>
            <Button variant="outline">Review</Button>
          </NotificationClose>
        </NotificationFooter>
      </NotificationContent>
    </Notification>
  )
}
`,
}

export { NotificationWithCard, NotificationWithCardCode }
