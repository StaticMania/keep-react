'use client'
import { Dispatch, FC, ReactNode, SetStateAction, useCallback, useEffect, useState } from 'react'
import { NotificationContext } from './NotificationContext'

export interface NotificationProps {
  children?: ReactNode
  onOpenChange?: Dispatch<SetStateAction<boolean>>
  isOpen?: boolean
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
}

const Notification: FC<NotificationProps> = ({
  children,
  isOpen: isOpenProp,
  onOpenChange,
  position = 'bottom-right',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false)

  const isControlled = isOpenProp !== undefined && onOpenChange !== undefined

  const isOpen = isControlled ? isOpenProp : internalIsOpen
  const setIsOpen = isControlled ? onOpenChange : setInternalIsOpen

  useEffect(() => {
    if (!isControlled) {
      setInternalIsOpen(isOpenProp ?? false)
    }
  }, [isOpenProp, isControlled])

  const handleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [setIsOpen])

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isOpen && setIsOpen(false)
      }
    }

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.notification-content')) {
        isOpen && setIsOpen(false)
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
  }, [isOpen, setIsOpen])

  return (
    <NotificationContext.Provider value={{ isOpen, handleOpen, position }}>{children}</NotificationContext.Provider>
  )
}

export { Notification }
