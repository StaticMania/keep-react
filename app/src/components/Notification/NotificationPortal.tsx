'use client'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useNotificationContext } from './NotificationContext'

const NotificationPortal = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useNotificationContext()
  return isOpen ? createPortal(<div className="fixed inset-0 z-50 overflow-auto">{children}</div>, document.body) : null
}

export { NotificationPortal }
