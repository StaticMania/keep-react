import type { Meta, StoryObj } from '@storybook/react'
import { Cookie, DownloadSimple, FigmaLogo } from 'phosphor-react'
import { Notification } from '.'
import { Button } from '../Button/Button'
import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import Image from 'next/image'

const DefaultNotificationComponent = () => {
  const [showNotification, setShowNotification] = useState(false)

  const onDismiss = () => {
    setShowNotification(!showNotification)
  }
  return (
    <div className="px-5 py-3">
      <Button onClick={onDismiss} type="primary">
        Show Notification
      </Button>
      <Notification dismiss={showNotification} onDismiss={onDismiss}>
        <Notification.Body>
          <Notification.Title>Can we store cookies?</Notification.Title>
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
    </div>
  )
}
const NotificationWithAvatarComponent = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-5 py-3">
      <Button type="primary" onClick={onDismiss}>
        Show Notification
      </Button>
      <Notification dismiss={showNotification} onDismiss={onDismiss} className="max-w-[400px]" position="bottom-left">
        <Notification.Container className="grid grid-cols-12">
          <Notification.Avatar className="col-span-2">
            <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
          </Notification.Avatar>
          <Notification.Body className="col-span-10">
            <Notification.Title>Kausar Ahmed Pial</Notification.Title>
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
        </Notification.Container>
      </Notification>
    </div>
  )
}
const NotificationWithIconComponent = () => {
  const [showNotification, setShowNotification] = useState(true)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-5 py-3">
      <Button type="primary" onClick={onDismiss}>
        Show Notification
      </Button>
      <Notification dismiss={showNotification} onDismiss={onDismiss} className="max-w-[400px]" position="top-left">
        <Notification.Container className="grid grid-cols-12">
          <Notification.Icon className="col-span-2">
            <Cookie size={24} color="#3D4A5C" />
          </Notification.Icon>
          <Notification.Body className="col-span-10">
            <Notification.Title>Can we store cookies?</Notification.Title>
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
        </Notification.Container>
      </Notification>
    </div>
  )
}
const NotificationWithCardComponent = () => {
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

const meta: Meta<typeof Notification> = {
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Notification content',
      control: { type: null },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    position: {
      description: 'Notification Position',
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'top-right' },
      },
    },
    onDismiss: {
      description: 'Determines whether the notification can be dismissed by the user',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
  decorators: [
    (Story) => (
      <div className="h-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Notification>

export const DefaultNotification: Story = {
  render: () => <DefaultNotificationComponent />,
}

export const NotificationWithIcon: Story = {
  render: () => <NotificationWithIconComponent />,
}

export const NotificationWithAvatar: Story = {
  render: () => <NotificationWithAvatarComponent />,
}

export const NotificationWithCard: Story = {
  render: () => <NotificationWithCardComponent />,
}
