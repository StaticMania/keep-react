'use client'
import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { useModalContext } from './ModalContext'
import { ModalPortal } from './ModalPortal'

const ModalBody = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useModalContext()

  return <AnimatePresence>{isOpen && <ModalPortal>{children}</ModalPortal>}</AnimatePresence>
}

ModalBody.displayName = 'ModalBody'

export { ModalBody }
