'use client'
import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { useDrawerContext } from './DrawerContext'
import { DrawerPortal } from './DrawerPortal'

const DrawerBody = ({ children }: { children: ReactNode }) => {
  const { isOpen } = useDrawerContext()
  return <AnimatePresence>{isOpen && <DrawerPortal>{children}</DrawerPortal>}</AnimatePresence>
}

export { DrawerBody }
