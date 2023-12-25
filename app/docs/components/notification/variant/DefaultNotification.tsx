'use client'
import { useState } from 'react'
import { Button, Notification } from '../../../../src'

const DefaultNotification = () => {
  const [showNotification, setShowNotification] = useState(true)

  const onDismiss = () => {
    setShowNotification(!showNotification)
  }
  return (
    <div className="px-5 py-3">
      <Button onClick={onDismiss} variant="primary">
        Show Notification
      </Button>
      <Notification dismiss={showNotification} onDismiss={onDismiss}>
        <Notification.Body>
          <Notification.Title>Can we store cookies?</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Container className="!mt-6 flex gap-3">
            <Button variant="primary" size="sm">
              Accept
            </Button>
            <Button variant="outlineGray" size="sm">
              Review
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
    </div>
  )
}

const DefaultNotificationCode = `
'use client'
import { useState } from 'react'
import { Button, Notification } from 'keep-react'

export const NotificationComponent = () => {
  const [showNotification, setShowNotification] = useState(true)

  const onDismiss = () => {
    setShowNotification(!showNotification)
  }
  return (
    <div>
      <Button onClick={onDismiss} variant="primary">
        Show Notification
      </Button>
      <Notification dismiss={showNotification} onDismiss={onDismiss}>
        <Notification.Body>
          <Notification.Title>Can we store cookies?</Notification.Title>
          <Notification.Description>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Container className="!mt-6 flex gap-3">
            <Button variant="primary" size="sm">
              Accept
            </Button>
            <Button variant="outlineGray" size="sm">
              Review
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
    </div>
  )
}
`

export { DefaultNotification, DefaultNotificationCode }
