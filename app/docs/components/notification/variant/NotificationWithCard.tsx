'use client'
import Image from 'next/image'
import { DownloadSimple, FigmaLogo } from 'phosphor-react'
import { useState } from 'react'
import { Button, Notification } from '~/src'

const NotificationWithCard = () => {
  const [notificationOne, setNotificationOne] = useState(true)
  const [notificationTwo, setNotificationTwo] = useState(true)
  const [notificationThree, setNotificationThree] = useState(true)

  const onDismissOne = () => {
    setNotificationOne(!notificationOne)
    setNotificationTwo(true)
    setNotificationThree(true)
  }
  const onDismissTwo = () => {
    setNotificationTwo(!notificationTwo)
    setNotificationOne(true)
    setNotificationThree(true)
  }
  const onDismissThree = () => {
    setNotificationTwo(true)
    setNotificationOne(true)
    setNotificationThree(!notificationThree)
  }
  return (
    <div className="px-5 py-3">
      <Button.Group>
        <Button onClick={onDismissOne} type="primary" positionInGroup="start">
          Bottom Left
        </Button>
        <Button onClick={onDismissTwo} type="primary" positionInGroup="middle">
          Bottom Right
        </Button>
        <Button onClick={onDismissThree} type="primary" positionInGroup="end">
          Top Right
        </Button>
      </Button.Group>
      <Notification dismiss={notificationOne} onDismiss={onDismissOne} className="p-0" position="bottom-left">
        <Notification.Media>
          <Image
            src="https://images.prismic.io/staticmania/be298f8b-0acf-4db1-9453-0f6288bfc584_notification.jpg?auto=compress,format"
            alt="notification"
            width={382}
            height={240}
            className="rounded-t-xl"
          />
        </Notification.Media>
        <Notification.Body className="pb-5 pl-[30px] pr-4 pt-5">
          <Notification.Title>Keep React is awesome</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Container className="!mt-6 flex gap-3">
            <Button type="primary" size="sm">
              Accept
            </Button>
            <Button type="outlineGray" size="sm">
              Review
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
      <Notification dismiss={notificationTwo} onDismiss={onDismissTwo} className="p-0" position="bottom-right">
        <Notification.Media>
          <Image
            src="https://images.prismic.io/staticmania/be298f8b-0acf-4db1-9453-0f6288bfc584_notification.jpg?auto=compress,format"
            alt="notification"
            width={382}
            height={240}
            className="rounded-t-xl"
          />
        </Notification.Media>
        <Notification.Body className="pb-5 pl-[30px] pr-4 pt-5">
          <Notification.Title>Keep React is awesome</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Container className="!mt-6 flex flex-col gap-3">
            <Button type="primary" size="sm" width="full">
              Download
            </Button>
            <Button type="outlineGray" size="sm" width="full">
              View Figma File
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
      <Notification dismiss={notificationThree} onDismiss={onDismissThree} position="top-right">
        <Notification.Body>
          <Notification.Title>Can we store cookies?</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Media>
            <Image
              src="https://images.prismic.io/staticmania/be298f8b-0acf-4db1-9453-0f6288bfc584_notification.jpg?auto=compress,format"
              alt="notification"
              width={382}
              height={240}
              className="rounded-xl"
            />
          </Notification.Media>
          <Notification.Container className="!mt-6 flex gap-3">
            <Button type="primary" size="sm">
              <span className="pr-2">
                <DownloadSimple size={18} color="#fff" />
              </span>
              Download
            </Button>
            <Button type="outlineGray" size="sm">
              <span className="pr-2">
                <FigmaLogo size={18} color="#455468" />
              </span>
              View Figma File
            </Button>
          </Notification.Container>
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
import { DownloadSimple, FigmaLogo } from 'phosphor-react'

const NotificationWithCard = () => {
  const [notificationOne, setNotificationOne] = useState(true)
  const [notificationTwo, setNotificationTwo] = useState(true)
  const [notificationThree, setNotificationThree] = useState(true)

  const onDismissOne = () => {
    setNotificationOne(!notificationOne)
  }
  const onDismissTwo = () => {
    setNotificationTwo(!notificationTwo)
  }
  const onDismissThree = () => {
    setNotificationThree(!notificationThree)
  }
  return (
    <div>
      <Button.Group>
        <Button onClick={onDismissOne} positionInGroup="start">
          Bottom Left
        </Button>
        <Button onClick={onDismissTwo} positionInGroup="middle">
          Bottom Right
        </Button>
        <Button onClick={onDismissThree} positionInGroup="end">
          Top Right
        </Button>
      </Button.Group>

      <Notification dismiss={notificationOne} onDismiss={onDismissOne} className="p-0" position="bottom-left">
        <Notification.Media>
          <Image
            src="https://images.prismic.io/staticmania/be298f8b-0acf-4db1-9453-0f6288bfc584_notification.jpg?auto=compress,format"
            alt="notification"
            width={382}
            height={240}
            className="rounded-t-xl"
          />
        </Notification.Media>
        <Notification.Body className="pb-5 pl-[30px] pr-4 pt-5">
          <Notification.Title>Keep React is awesome</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Container className="!mt-6 flex gap-3">
            <Button type="primary" size="sm">
              Accept
            </Button>
            <Button type="outlineGray" size="sm">
              Review
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
      <Notification dismiss={notificationTwo} onDismiss={onDismissTwo} className="p-0" position="bottom-right">
        <Notification.Media>
          <Image
            src="https://images.prismic.io/staticmania/be298f8b-0acf-4db1-9453-0f6288bfc584_notification.jpg?auto=compress,format"
            alt="notification"
            width={382}
            height={240}
            className="rounded-t-xl"
          />
        </Notification.Media>
        <Notification.Body className="pb-5 pl-[30px] pr-4 pt-5">
          <Notification.Title>Keep React is awesome</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Container className="!mt-6 flex flex-col gap-3">
            <Button type="primary" size="sm" width="full">
              Download
            </Button>
            <Button type="outlineGray" size="sm" width="full">
              View Figma File
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
      <Notification dismiss={notificationThree} onDismiss={onDismissThree} position="top-right">
        <Notification.Body>
          <Notification.Title>Can we store cookies?</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Media>
            <Image
              src="https://images.prismic.io/staticmania/be298f8b-0acf-4db1-9453-0f6288bfc584_notification.jpg?auto=compress,format"
              alt="notification"
              width={382}
              height={240}
              className="rounded-xl"
            />
          </Notification.Media>
          <Notification.Container className="!mt-6 flex gap-3">
            <Button type="primary" size="sm">
              <span className="pr-2">
                <DownloadSimple size={18} color="#fff" />
              </span>
              Download
            </Button>
            <Button type="outlineGray" size="sm">
              <span className="pr-2">
                <FigmaLogo size={18} color="#455468" />
              </span>
              View Figma File
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
    </div>
  )
}
`

export { NotificationWithCard, NotificationWithCardCode }
