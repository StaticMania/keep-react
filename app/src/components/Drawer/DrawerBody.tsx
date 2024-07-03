'use client'
import { ReactNode } from 'react'
import { DrawerPortal } from './DrawerPortal'

const DrawerBody = ({ children }: { children: ReactNode }) => {
  return <DrawerPortal>{children}</DrawerPortal>
}

export { DrawerBody }
