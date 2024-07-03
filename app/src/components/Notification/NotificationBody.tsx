'use client'
import { ReactNode } from 'react'
import { NotificationPortal } from './NotificationPortal'

const NotificationBody = ({ children }: { children: ReactNode }) => {
  return <NotificationPortal>{children}</NotificationPortal>
}

export { NotificationBody }
