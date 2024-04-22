'use client'
import { ForwardedRef, HTMLAttributes, ReactNode, forwardRef, useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import { cn } from '../../helpers/cn'
import { Content } from './Content'
import { DrawerContext } from './Context'
import { keepDrawerTheme } from './theme'

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onClose?: () => void
  position?: 'left' | 'right' | 'top' | 'bottom'
  children?: ReactNode
}

const DrawerComponent = forwardRef<HTMLDivElement, DrawerProps>(
  ({ isOpen, onClose, position = 'bottom', children, className }: DrawerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [isClosing, setIsClosing] = useState(false)

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
          <RemoveScroll enabled={isOpen}>
            <FocusLock disabled={!isOpen} returnFocus>
              <div
                ref={ref}
                className={cn(
                  keepDrawerTheme.base,
                  isClosing ? keepDrawerTheme.isClosing.on : keepDrawerTheme.isClosing.off,
                  className,
                )}>
                <DrawerContext.Provider value={{ position }}>{children}</DrawerContext.Provider>
              </div>
            </FocusLock>
          </RemoveScroll>,
          document.body,
        )
      : null
  },
)

DrawerComponent.displayName = 'Drawer'

export const Drawer = Object.assign(DrawerComponent, {
  Content,
})
