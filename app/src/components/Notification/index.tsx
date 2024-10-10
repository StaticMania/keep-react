'use client'
import { Portal, Trigger } from '@radix-ui/react-dialog'
import { Notification } from './Notification'
import { NotificationContent } from './NotificationContent'
import { NotificationDescription } from './NotificationDescription'
import { NotificationTitle } from './NotificationTitle'

const NotificationAction = Trigger
const NotificationPortal = Portal

export {
  Notification,
  NotificationAction,
  NotificationContent,
  NotificationDescription,
  NotificationPortal,
  NotificationTitle,
}
