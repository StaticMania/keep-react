'use client'
import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export const KeepPortal = ({ children }: { children: ReactNode }) => {
  return createPortal(children, document.body)
}
