'use client'
import { FC, ReactNode } from 'react'
import { Avatar } from './Avatar'
import { Description } from './Description'
import { Icon } from './Icon'
import { Media } from './Media'
import { Title } from './Title'
import { cn } from '~/src/helpers/cn'
import { Body } from './Body'
import { Container } from './Container'
import { X } from 'phosphor-react'
import { useTheme } from '../../Keep/ThemeContext'

export interface NotificationProps {
  children?: ReactNode
  className?: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  onDismiss?: boolean | (() => void)
  dismiss?: boolean
}

export interface keepNotificationTheme {
  root: string
  position: {
    show: string
    hidden: string
    'top-left': string
    'top-right': string
    'bottom-left': string
    'bottom-right': string
  }
  crossBtn: string
  description: string
  media: string
  icon: string
  body: string
  avatar: string
  title: string
}

const NotificationComponent: FC<NotificationProps> = ({
  className,
  children,
  position = 'top-right',
  dismiss = false,
  onDismiss,
}) => {
  const { root, crossBtn, position: positionStyle } = useTheme().theme.notification
  return (
    <div className={cn(dismiss ? positionStyle.hidden : positionStyle.show, positionStyle[position])}>
      <div className={cn(root, className)}>
        {onDismiss && typeof onDismiss === 'function' && (
          <button className={crossBtn} onClick={() => onDismiss()}>
            <X size="20" color="#222" />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

Icon.displayName = 'Notification.Icon'
Avatar.displayName = 'Notification.Avatar'
Media.displayName = 'Notification.Media'
Description.displayName = 'Notification.Description'
Title.displayName = 'Notification.Title'
Body.displayName = 'Notification.Body'
Container.displayName = 'Notification.Container'

export const Notification = Object.assign(NotificationComponent, {
  Icon,
  Avatar,
  Media,
  Description,
  Title,
  Body,
  Container,
})
