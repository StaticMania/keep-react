'use client'
import { HTMLAttributes, forwardRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { cn } from '../../helpers/cn'
import { ModalBody } from './Body'
import { ModalContent } from './Content'
import { ModalFooter } from './Footer'
import { ModalIcon } from './Icon'
import { modalTheme } from './theme'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

const ModalComponent = forwardRef<HTMLDivElement, ModalProps>(({ isOpen, onClose, children, ...props }, ref) => {
  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose && onClose()
      }
    }

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.modal-content')) {
        onClose && onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress)
      document.addEventListener('mousedown', handleClickOutsideModal)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
      document.removeEventListener('mousedown', handleClickOutsideModal)
    }
  }, [isOpen, onClose])

  return isOpen
    ? createPortal(
        <RemoveScroll enabled={isOpen}>
          <FocusLock disabled={!isOpen} returnFocus>
            <div role="dialog" ref={ref} {...props} className={cn(modalTheme.modal, props.className)}>
              {children}
            </div>
          </FocusLock>
        </RemoveScroll>,
        document.body,
      )
    : null
})

ModalComponent.displayName = 'Modal'

export const Modal = Object.assign(ModalComponent, {
  Footer: ModalFooter,
  Body: ModalBody,
  Icon: ModalIcon,
  Content: ModalContent,
})
