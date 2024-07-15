'use client'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

const NotificationPortal = ({ children }: { children: ReactNode }) => {
  return createPortal(<div className="fixed inset-0 z-50 overflow-auto">{children}</div>, document.body)
}

export { NotificationPortal }
