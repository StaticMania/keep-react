'use client'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { useModalContext } from './ModalContext'
import { ModalOverlay } from './ModalOverlay'

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useModalContext()
  return isOpen
    ? createPortal(
        <RemoveScroll enabled={isOpen}>
          <ReactFocusLock disabled={!isOpen} returnFocus>
            <ModalOverlay>{children}</ModalOverlay>
          </ReactFocusLock>
        </RemoveScroll>,
        document.body,
      )
    : null
}

ModalPortal.displayName = 'ModalPortal'

export { ModalPortal }
