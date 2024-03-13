'use client'
import { useState } from 'react'
import { Avatar, Button, Notification } from '../../../../src'

const NotificationPosition = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [position, setPosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('bottom-right')
  const openController = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button.Group>
        <Button
          onClick={() => {
            openController()
            setPosition('top-left')
          }}
          position="start">
          Top Left
        </Button>
        <Button
          onClick={() => {
            openController()
            setPosition('top-right')
          }}
          position="center">
          Top Right
        </Button>
        <Button
          onClick={() => {
            openController()
            setPosition('bottom-left')
          }}
          position="center">
          Bottom Left
        </Button>
        <Button
          onClick={() => {
            openController()
            setPosition('bottom-right')
          }}
          position="end">
          Bottom Right
        </Button>
      </Button.Group>
      <Notification isOpen={isOpen} onClose={openController} position={position}>
        <Notification.Body className="max-w-sm p-6">
          <Notification.Content>
            <div className="flex items-start gap-2">
              <div>
                <Avatar img="/images/avatar/avatar-1.png" className="border-2 border-error-100" />
              </div>
              <div className="max-w-[220px]">
                <p className="text-body-4 font-medium text-metal-700">
                  Khairul Islam Ridoy comment on your recent posts
                </p>
                <p className="text-body-5 font-normal text-metal-400">5 min ago</p>
              </div>
            </div>
          </Notification.Content>
        </Notification.Body>
      </Notification>
    </div>
  )
}

const NotificationPositionCode = `
'use client'
import { useState } from 'react'
import { Avatar, Button, Notification } from 'keep-react'

export const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const control = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <Button onClick={control}>Show Notification</Button>
      <Notification isOpen={isOpen} onClose={control}>
        <Notification.Body className="max-w-sm p-4">
          <Notification.Content>
            <div className="flex items-start gap-2">
              <div>
                <Avatar img="/images/avatar/avatar-1.png" className="border-2 border-error-100" />
              </div>
              <div className="max-w-[220px]">
                <p className="text-body-4 font-medium text-metal-700">
                  Khairul Islam Ridoy comment on your recent posts
                </p>
                <p className="text-body-5 font-normal text-metal-400">5 min ago</p>
              </div>
            </div>
          </Notification.Content>
        </Notification.Body>
      </Notification>
    </div>
  )
}
`

export { NotificationPosition, NotificationPositionCode }
