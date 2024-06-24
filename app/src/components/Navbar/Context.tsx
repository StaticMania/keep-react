'use client'
import { createContext, useContext } from 'react'

export type NavbarProps = {
  open?: boolean
  handleOpen?: () => void
}

export const NavbarContext = createContext<NavbarProps | undefined>(undefined)

export function useNavbarContext(): NavbarProps {
  const context = useContext(NavbarContext)

  if (!context) {
    throw new Error('useNavbarContext should be used within the NavbarContext provider!')
  }

  return context
}
