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
      <Button onClick={handleShowNotification} type="primary">
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-sm"
        additionalContent={
          <div className="mt-2.5">
            <p className="text-sm font-normal text-slate-500 md:text-base">
              Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info">
                Accept
              </Button>
              <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
                Review
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-base font-medium text-slate-700 md:text-xl">Can we store cookies?</h3>
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
      <Button type="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-[400px]"
        position="top-left"
        additionalContent={
          <div className="mt-2.5 text-sm font-normal text-slate-500 md:text-base">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info">
                Accept
              </Button>
              <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
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
        <h3 className="text-base font-medium text-slate-700 md:text-xl">
          Rono Pixel
          <span className="pl-2 text-xs font-medium text-slate-400 md:text-sm">Product Designer</span>
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
      <Button type="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        className="max-w-sm"
        headerBannerSrc="https://images.prismic.io/staticmania/58497239-b7e5-44e9-8185-25d467f6c551_banner.png?auto=compress,format"
        additionalContent={
          <div className="mt-2.5 text-sm font-normal text-slate-500 md:text-base">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info" width="half">
                Download
              </Button>
              <Button size="xs" type="outlineGray" color="info" customClass="ml-3" width="half">
                View Figma
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-base font-medium text-slate-700 md:text-xl">Welcome Keep Design</h3>
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
      <Button type="primary" onClick={handleShowNotification}>
        Show Notification
      </Button>
      <Notification
        showNotification={showNotification}
        dismiss={!showNotification}
        onDismiss={onDismiss}
        position="bottom-left"
        className="max-w-[400px]"
        infoIcon={
          <Button type="default" circle={true} size="xs">
            <span>
              <Cookie size={24} weight="bold" color="#3D4A5C" />
            </span>
          </Button>
        }
        additionalContent={
          <div className="mt-2.5 text-sm font-normal text-slate-500 md:text-base">
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className="mt-6 flex">
              <Button size="xs" type="primary" color="info">
                Accept
              </Button>
              <Button size="xs" type="outlineGray" color="info" customClass="ml-3">
                Review
              </Button>
            </div>
          </div>
        }>
        <h3 className="text-base font-medium text-slate-700 md:text-xl">Can we store cookies?</h3>
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
