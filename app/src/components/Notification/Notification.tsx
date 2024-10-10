'use client'
import { DialogProps, Root } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { NotificationContext } from './Context'
import { notificationTheme } from './theme'

export interface INotificationProps extends DialogProps {
  showCloseIcon?: boolean
  position?: keyof typeof notificationTheme.position
  children: ReactNode
}

const Notification: FC<INotificationProps> = ({
  children,
  showCloseIcon = true,
  position = 'bottom-right',
  ...props
}) => {
  return (
    <Root {...props}>
      <NotificationContext.Provider value={{ showCloseIcon, position }}>{children}</NotificationContext.Provider>
    </Root>
  )
}

export { Notification }

export type NotificationProps = ComponentPropsWithoutRef<typeof Notification>
