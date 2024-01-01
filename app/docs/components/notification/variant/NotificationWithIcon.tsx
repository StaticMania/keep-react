'use client'
import { useState } from 'react'
import { Cookie } from 'phosphor-react'
import { Notification, Button } from '../../../../src'

const NotificationWithIcon = () => {
  const [showNotification, setShowNotification] = useState(true)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div className="px-5 py-3">
      <Button variant="primary" onClick={onDismiss}>
        Show Notification
      </Button>
      <Notification dismiss={showNotification} onDismiss={onDismiss} className="max-w-[400px]" position="bottom-right">
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
              <Button variant="primary" size="sm">
                Accept
              </Button>
              <Button variant="outlineGray" size="sm">
                Review
              </Button>
            </Notification.Container>
          </Notification.Body>
        </Notification.Container>
      </Notification>
    </div>
  )
}

const NotificationWithIconCode = `
'use client'
import { useState } from 'react'
import { Cookie } from 'phosphor-react'
import { Notification, Button } from 'keep-react'

export const NotificationComponent = () => {
  const [showNotification, setShowNotification] = useState(true)
  const onDismiss = () => {
    setShowNotification(!showNotification)
  }

  return (
    <div>
      <Button variant="primary" onClick={onDismiss}>
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
              <Button variant="primary" size="sm">
                Accept
              </Button>
              <Button variant="outlineGray" size="sm">
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

export { NotificationWithIcon, NotificationWithIconCode }
