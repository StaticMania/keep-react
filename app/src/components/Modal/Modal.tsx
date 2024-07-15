'use client'
import { Dispatch, FC, ReactNode, SetStateAction, useCallback, useEffect, useState } from 'react'
import { ModalContext } from './ModalContext'

interface ModalProps {
  children: ReactNode
  isOpen?: boolean
  onOpenChange?: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ children, isOpen: isOpenProp, onOpenChange }) => {
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
      if (!(event.target as HTMLElement).closest('.modal-content')) {
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

  return <ModalContext.Provider value={{ isOpen, handleOpen }}>{children}</ModalContext.Provider>
}

export { Modal }
