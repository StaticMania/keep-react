import Image from 'next/image'
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

const NotificationWithCard = () => {
  return (
    <div className="px-5 py-3">
      <Notification>
        <NotificationAction />
        <NotificationBody>
          <NotificationContent className="mb-2 max-w-xs space-y-4 overflow-hidden rounded-xl">
            <Image
              src="https://via.placeholder.com/600x400"
              alt="image"
              width={600}
              className="rounded-lg"
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
                <Button size="sm">Accept</Button>
              </NotificationClose>
              <NotificationClose asChild>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </NotificationClose>
            </NotificationFooter>
          </NotificationContent>
        </NotificationBody>
      </Notification>
    </div>
  )
}

const NotificationWithCardCode = `
import Image from 'next/image'
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
    <Notification>
      <NotificationAction />
      <NotificationBody>
        <NotificationContent className="mb-2 max-w-xs space-y-4 overflow-hidden rounded-xl">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="image"
            width={600}
            className="rounded-lg"
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
              <Button size="sm">Accept</Button>
            </NotificationClose>
            <NotificationClose asChild>
              <Button variant="outline" size="sm">
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

export { NotificationWithCard, NotificationWithCardCode }
