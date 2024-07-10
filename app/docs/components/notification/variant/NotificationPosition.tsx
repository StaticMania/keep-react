'use client'
import { useState } from 'react'
import {
  Avatar,
  AvatarImage,
  Button,
  ButtonGroup,
  Notification,
  NotificationBody,
  NotificationContent,
} from '../../../../src'

const NotificationPosition = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [position, setPosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('bottom-right')
  const openController = () => setIsOpen(!isOpen)

  return (
    <div className="px-5 py-3">
      <ButtonGroup>
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
      </ButtonGroup>
      <Notification isOpen={isOpen} onOpenChange={setIsOpen} position={position}>
        <NotificationBody>
          <NotificationContent className="max-w-sm p-6">
            <div className="flex items-start gap-2">
              <div>
                <Avatar className="border-2 border-error-100">
                  <AvatarImage src="/images/avatar/avatar-1.png" />
                </Avatar>
              </div>
              <div className="max-w-[220px]">
                <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">
                  Khairul Islam Ridoy comment on your recent posts
                </p>
                <p className="text-body-5 font-normal text-metal-400">5 min ago</p>
              </div>
            </div>
          </NotificationContent>
        </NotificationBody>
      </Notification>
    </div>
  )
}

const NotificationPositionCode = `
'use client'
import { useState } from 'react'
import { Avatar, AvatarImage, Button, ButtonGroup, Notification, NotificationBody, NotificationContent } from 'keep-react'

export const NotificationComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState('bottom-right')
  const openController = () => setIsOpen(!isOpen)

  return (
    <>
      <ButtonGroup>
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
      </ButtonGroup>
      <Notification isOpen={isOpen} onOpenChange={setIsOpen} position={position}>
        <NotificationBody>
          <NotificationContent className="max-w-sm p-6">
            <div className="flex items-start gap-2">
              <div>
                <Avatar className="border-2 border-error-100">
                  <AvatarImage src="/images/avatar/avatar-1.png" />
                </Avatar>
              </div>
              <div className="max-w-[220px]">
                <p className="text-body-4 font-medium text-metal-600 dark:text-metal-300">
                  Khairul Islam Ridoy comment on your recent posts
                </p>
                <p className="text-body-5 font-normal text-metal-400">5 min ago</p>
              </div>
            </div>
          </NotificationContent>
        </NotificationBody>
      </Notification>
    </>
  )
}

`

export { NotificationPosition, NotificationPositionCode }
