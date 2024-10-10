import Image from 'next/image'
import {
  Button,
  Notification,
  NotificationAction,
  NotificationContent,
  NotificationDescription,
  NotificationTitle,
} from '../../../../src'

const NotificationWithCard = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Notification showCloseIcon={false}>
        <NotificationAction asChild>
          <Button>Open Notification</Button>
        </NotificationAction>
        <NotificationContent className="max-w-xs overflow-hidden rounded-xl">
          <Image src="/images/keep-card.jpg" className="rounded-lg" alt="image" width={600} height={300} />
          <div className="my-4 space-y-1.5">
            <NotificationTitle>Can we store cookies?</NotificationTitle>
            <NotificationDescription>
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </NotificationDescription>
          </div>
          <div className="flex gap-2.5">
            <Button>Accept</Button>
            <Button variant="outline">Review</Button>
          </div>
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
  NotificationContent,
  NotificationDescription,
  NotificationTitle,
} from 'keep-react'

export const NotificationComponent = () => {
  return (
    <Notification showCloseIcon={false}>
      <NotificationAction asChild>
        <Button>Open Notification</Button>
      </NotificationAction>
      <NotificationContent className="max-w-xs overflow-hidden rounded-xl">
        <Image src="/images/keep-card.jpg" className="rounded-lg" alt="image" width={600} height={300} />
        <div className="my-4 space-y-1.5">
          <NotificationTitle>Can we store cookies?</NotificationTitle>
          <NotificationDescription>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </NotificationDescription>
        </div>
        <div className="flex gap-2.5">
          <Button>Accept</Button>
          <Button variant="outline">Review</Button>
        </div>
      </NotificationContent>
    </Notification>
  )
}
`,
}

export { NotificationWithCard, NotificationWithCardCode }
