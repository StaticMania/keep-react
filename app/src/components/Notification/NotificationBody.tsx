'use client'
import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { useNotificationContext } from './NotificationContext'
import { NotificationPortal } from './NotificationPortal'

const NotificationBody = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useNotificationContext()

  return <AnimatePresence>{isOpen && <NotificationPortal>{children}</NotificationPortal>}</AnimatePresence>
}

export { NotificationBody }
