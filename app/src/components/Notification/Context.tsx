import { createContext, useContext } from 'react'
import { NotificationProps } from './Notification'

export const NotificationContext = createContext<NotificationProps | undefined>(undefined)

export function useNotificationContext(): NotificationProps {
  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error('useNotificationContext should be used within the NotificationContext provider!')
  }

  return context
}
