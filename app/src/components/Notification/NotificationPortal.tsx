'use client'
import { ReactNode } from 'react'
import { KeepPortal } from '../Helpers/KeepPortal'

const NotificationPortal = ({ children }: { children: ReactNode }) => {
  return (
    <KeepPortal>
      <div className="fixed inset-0 z-50 overflow-auto">{children}</div>
    </KeepPortal>
  )
}

export { NotificationPortal }
