import type { Meta, StoryObj } from '@storybook/react'
import { Cookie } from 'phosphor-react'
import { Notification } from '.'
import { Button } from '../Button/Button'

import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'

const DefaultNotificationComponent = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }
  return (
    <div className="px-2 py-3">
      <Button onClick={handleShowNotification} variant="primary">
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-sm"
        additionalContent={
          <div className="mt-2.5">
            <p className="text-body-5 font-normal text-metal-500 md:text-body-4">
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-6 flex">
              <Button size="xs" variant="primary" color="info">
                Accept
              </Button>
              <Button size="xs" variant="outlineGray" color="info" className="ml-3">
                Review
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-body-4 font-medium text-metal-700 md:text-body-2">Can we store cookies?</h3>
      </Notification>
    </div>
  )
}
const NotificationWithAvatarComponent = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-2 py-3">
      <Button variant="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-[400px]"
        position="top-left"
        additionalContent={
          <div className="mt-2.5 text-body-5 font-normal text-metal-500 md:text-body-4">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" variant="primary" color="info">
                Accept
              </Button>
              <Button size="xs" variant="outlineGray" color="info" className="ml-3">
                View Profile
              </Button>
            </div>
          </div>
        }
        infoIcon={
          <div className="h-12 w-12">
            <Avatar shape="circle" size="md" img="/images/avatar/avatar-4.png" />
          </div>
        }>
        <h3 className="text-body-4 font-medium text-metal-700 md:text-body-2">
          Rono Pixel
          <span className="pl-2 text-body-6 font-medium text-metal-400 md:text-body-5">Product Designer</span>
        </h3>
      </Notification>
    </div>
  )
}
const NotificationWithCardComponent = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }
  return (
    <div className="px-2 py-3">
      <Button variant="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-sm"
        headerBannerSrc="https://images.prismic.io/staticmania/58497239-b7e5-44e9-8185-25d467f6c551_banner.png?auto=compress,format"
        additionalContent={
          <div className="mt-2.5 text-body-5 font-normal text-metal-500 md:text-body-4">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" variant="primary" color="info" width="half">
                Download
              </Button>
              <Button size="xs" variant="outlineGray" color="info" className="ml-3" width="half">
                View Figma
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-body-4 font-medium text-metal-700 md:text-body-2">Welcome Keep Design</h3>
      </Notification>
    </div>
  )
}
const NotificationWithIconComponent = () => {
  const [showNotification, setShowNotification] = useState(false)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }
  const handleShowNotification = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-2 py-3">
      <Button variant="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="bottom-left"
        className="max-w-[400px]"
        infoIcon={
          <Button variant="default" circle={true} size="xs">
            <span>
              <Cookie size={24} weight="bold" color="#3D4A5C" />
            </span>
          </Button>
        }
        additionalContent={
          <div className="mt-2.5 text-body-5 font-normal text-metal-500 md:text-body-4">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" variant="primary" color="info">
                Accept
              </Button>
              <Button size="xs" variant="outlineGray" color="info" className="ml-3">
                Review
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-body-4 font-medium text-metal-700 md:text-body-2">Can we store cookies?</h3>
      </Notification>
    </div>
  )
}

const meta: Meta<typeof Notification> = {
  component: Notification,
  tags: ['autodocs'],
  argTypes: {
    headerBannerSrc: {
      description: 'Source URL for an image to be used as the header banner of the notification',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
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
    infoIcon: {
      description: 'Icon to be displayed in the notification as an informational indicator',
      control: { type: null },
    },
    additionalContent: {
      description: 'Additional content to be displayed within the notification.',
      control: { type: null },
    },
    onDismiss: {
      description: 'Determines whether the notification can be dismissed by the user',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    componentSubtitle: 'Displays an image that represents a user or organization',
  },
  decorators: [
    (Story) => (
      <div className="h-64">
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
