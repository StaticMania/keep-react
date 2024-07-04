'use client'
import { Dispatch, FC, ReactNode, SetStateAction, useCallback, useEffect, useState } from 'react'
import { DrawerContext } from './DrawerContext'

interface DrawerProps {
  children: ReactNode
  isOpen?: boolean
  onOpenChange?: Dispatch<SetStateAction<boolean>>
  position?: 'left' | 'right' | 'top' | 'bottom'
}

const Drawer: FC<DrawerProps> = ({ children, position = 'bottom', onOpenChange, isOpen: isOpenProp }) => {
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
      if (!(event.target as HTMLElement).closest('.drawer-content')) {
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

  return <DrawerContext.Provider value={{ position, handleOpen, isOpen }}>{children}</DrawerContext.Provider>
}

export { Drawer }
