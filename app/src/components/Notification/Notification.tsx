'use client'
import { X } from 'phosphor-react'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { Avatar } from './Avatar'
import { Body } from './Body'
import { Container } from './Container'
import { Description } from './Description'
import { Icon } from './Icon'
import { Media } from './Media'
import { Title } from './Title'
import { notificationTheme } from './theme'

/**
 * Props for the Notification component.
 * @interface NotificationProps
 */
export interface NotificationProps {
  /**
   * The content of the Notification.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode
  /**
   * Additional class name for the Notification.
   * @type {string}
   * @default ''
   */
  className?: string
  /**
   * The position of the Notification.
   * @type {'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'}
   * @default 'top-right'
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /**
   * Callback function to be called when the Notification is dismissed.
   * If set to `true`, the Notification will be dismissed automatically.
   * @type {boolean | (() => void)}
   * @default false
   */
  onDismiss?: boolean | (() => void)
  /**
   * Determines whether the Notification can be dismissed.
   * @type {boolean}
   * @default false
   */
  dismiss?: boolean
}

const NotificationComponent: FC<NotificationProps> = ({
  className,
  children,
  position = 'top-right',
  dismiss = false,
  onDismiss,
}) => {
  const { root, crossBtn, position: positionStyle } = notificationTheme
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
