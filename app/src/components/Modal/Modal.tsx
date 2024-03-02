'use client'
import { FC, HTMLAttributes, forwardRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../helpers/cn'
import { Body } from './Body'
import { Content } from './Content'
import { Footer } from './Footer'
import { Icon } from './Icon'
import { modalTheme } from './theme'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

const ModalComponent: FC<ModalProps> = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, children, ...props }, ref) => {
    useEffect(() => {
      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose()
        }
      }

      const handleClickOutsideModal = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.modal-content')) {
          onClose()
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
          <div role="dialog" ref={ref} {...props} className={cn(modalTheme.modal, props.className)}>
            {children}
          </div>,
          document.body,
        )
      : null
  },
)

ModalComponent.displayName = 'Modal'

export const Modal = Object.assign(ModalComponent, {
  Footer,
  Body,
  Icon,
  Content,
})
