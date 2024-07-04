'use client'
import { createContext, useContext } from 'react'

export type ModalPropsContext = {
  isOpen: boolean
  handleOpen: () => void
}

export const ModalContext = createContext<ModalPropsContext | undefined>(undefined)

export function useModalContext(): ModalPropsContext {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext should be used within the ModalContext provider!')
  }

  return context
}
