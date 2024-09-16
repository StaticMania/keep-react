'use client'
import { createContext, useContext } from 'react'

type DrawerContextProps = {
  position?: 'left' | 'right' | 'top' | 'bottom'
}

export const DrawerContext = createContext<DrawerContextProps | undefined>(undefined)

export function useDrawerContext(): DrawerContextProps {
  const context = useContext(DrawerContext)

  if (!context) {
    throw new Error('useDrawerContext should be used within the DrawerContext provider!')
  }

  return context
}
