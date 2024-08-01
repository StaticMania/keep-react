'use client'
import { ReactNode } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { KeepPortal } from '../Helpers/KeepPortal'
import { useModalContext } from './ModalContext'
import { ModalOverlay } from './ModalOverlay'

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useModalContext()
  return (
    <KeepPortal>
      <RemoveScroll enabled={isOpen}>
        <ReactFocusLock disabled={!isOpen} returnFocus>
          <ModalOverlay>{children}</ModalOverlay>
        </ReactFocusLock>
      </RemoveScroll>
    </KeepPortal>
  )
}

ModalPortal.displayName = 'ModalPortal'

export { ModalPortal }
