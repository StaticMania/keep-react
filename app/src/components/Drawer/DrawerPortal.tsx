'use client'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { useDrawerContext } from './DrawerContext'
import { DrawerOverlay } from './DrawerOverlay'

const DrawerPortal = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useDrawerContext()
  return createPortal(
    <RemoveScroll enabled={isOpen}>
      <ReactFocusLock disabled={!isOpen} returnFocus>
        <DrawerOverlay />
        {children}
      </ReactFocusLock>
    </RemoveScroll>,
    document.body,
  )
}

export { DrawerPortal }
