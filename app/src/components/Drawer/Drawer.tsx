'use client'
import { ForwardedRef, HTMLAttributes, forwardRef, useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { DrawerContext } from './Context'

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onClose?: () => void
  position?: 'left' | 'right' | 'top' | 'bottom'
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ isOpen, onClose, position = 'bottom', children }: DrawerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [isClosing, setIsClosing] = useState<boolean>(false)

    const handleClose = useCallback(() => {
      setIsClosing(true)
      setTimeout(() => {
        onClose && onClose()
        setIsClosing(false)
      }, 300)
    }, [onClose])

    useEffect(() => {
      const handleEscapeKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose && handleClose()
        }
      }

      const handleClickOutsideModal = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).closest('.drawer-content')) {
          handleClose && handleClose()
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
    }, [isOpen, handleClose])

    return isOpen
      ? createPortal(
          <RemoveScroll enabled={isOpen} ref={ref}>
            <FocusLock disabled={!isOpen} returnFocus>
              <DrawerContext.Provider value={{ position, isClosing }}>{children}</DrawerContext.Provider>
            </FocusLock>
          </RemoveScroll>,
          document.body,
        )
      : null
  },
)

Drawer.displayName = 'Drawer'

export { Drawer }
