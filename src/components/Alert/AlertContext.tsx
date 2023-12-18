import { createContext, useContext } from 'react'

type AlertContext = {
  color?: 'primary' | 'success' | 'warning' | 'error' | 'metal'
}

export const AlertContext = createContext<AlertContext | undefined>(undefined)

export function useAlertContext(): AlertContext {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error('useAlertContext should be used within the AlertContext provider!')
  }

  return context
}
