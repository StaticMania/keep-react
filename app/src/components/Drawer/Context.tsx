import { createContext, useContext } from 'react'
import { DrawerProps } from './Drawer'

export const DrawerContext = createContext<DrawerProps | undefined>(undefined)

export function useDrawerContext(): DrawerProps {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('useDrawerContext should be used within the DrawerContext provider!')
  }

  return context
}
