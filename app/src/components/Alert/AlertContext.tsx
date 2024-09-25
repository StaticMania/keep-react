'use client'
import { createContext, useContext } from 'react'
import { ColorVariant } from './theme'

type AlertContextProps = {
  color?: keyof ColorVariant
}

export const AlertContext = createContext<AlertContextProps | undefined>(undefined)

export function useAlertContext(): AlertContextProps {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error('useAlertContext should be used within the AlertContext provider!')
  }

  return context
}
