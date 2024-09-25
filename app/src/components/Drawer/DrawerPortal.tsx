'use client'
import { ReactNode } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { KeepPortal } from '../Helpers/KeepPortal'
import { useDrawerContext } from './DrawerContext'
import { DrawerOverlay } from './DrawerOverlay'

const DrawerPortal = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useDrawerContext()
  return (
    <KeepPortal>
      <RemoveScroll enabled={isOpen}>
        <ReactFocusLock disabled={!isOpen} returnFocus>
          <DrawerOverlay />
          {children}
        </ReactFocusLock>
      </RemoveScroll>
    </KeepPortal>
  )
}

export { DrawerPortal }
