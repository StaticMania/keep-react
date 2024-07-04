'use client'
import { createContext, useContext } from 'react'

export interface NotificationContextProps {
  isOpen?: boolean
  handleOpen?: () => void
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const NotificationContext = createContext<NotificationContextProps | undefined>(undefined)

export function useNotificationContext(): NotificationContextProps {
  const context = useContext(NotificationContext)

  if (!context) {
    throw new Error('useNotificationContext should be used within the NotificationContext provider!')
  }

  return context
}
