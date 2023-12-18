'use client'
import { useState } from 'react'
import { Notification, Button, Avatar } from '~/src'

const NotificationWithAvatar = () => {
  const [showNotification, setShowNotification] = useState(true)
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

const NotificationWithAvatarCode = `
'use client'
import { useState } from 'react'
import { Notification, Button, Avatar } from 'keep-react'

export const NotificationComponent = () => {
  const [showNotification, setShowNotification] = useState(true)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-2 py-3">
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
`

export { NotificationWithAvatar, NotificationWithAvatarCode }
