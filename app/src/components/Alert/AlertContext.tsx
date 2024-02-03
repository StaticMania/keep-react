import { createContext, useContext } from 'react'

type AlertPropsContext = {
  color?: 'primary' | 'success' | 'warning' | 'error' | 'metal'
}

export const AlertContext = createContext<AlertPropsContext | undefined>(undefined)

export function useAlertContext(): AlertPropsContext {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error('useAlertContext should be used within the AlertContext provider!')
  }

  return context
}
