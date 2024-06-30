'use client'
import { ReactNode } from 'react'
import { ModalPortal } from './ModalPortal'

const ModalBody = ({ children }: { children: ReactNode }) => {
  return <ModalPortal>{children}</ModalPortal>
}

ModalBody.displayName = 'ModalBody'

export { ModalBody }
