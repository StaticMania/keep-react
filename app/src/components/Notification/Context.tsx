'use client'
import { createContext, useContext } from 'react'
import { notificationTheme } from './theme'

type NotificationContextProps = {
  showCloseIcon?: boolean
  position?: keyof typeof notificationTheme.position
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined)

export function useNotificationContext(): NotificationContextProps {
  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error('useNotificationContext should be used within the NotificationContext provider!')
  }

  return context
}
