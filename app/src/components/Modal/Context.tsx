'use client'
import { createContext, useContext } from 'react'

type ModalContextProps = {
  showCloseIcon?: boolean
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export function useModalContext(): ModalContextProps {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext should be used within the ModalContext provider!')
  }

  return context
}
