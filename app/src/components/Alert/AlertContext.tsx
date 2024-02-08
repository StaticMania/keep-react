import { createContext, useContext } from 'react'
import { AlertProps } from './Alert'

type AlertContextProps = Omit<AlertProps, 'children'> & {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
}

export const AlertContext = createContext<AlertContextProps | undefined>(undefined)

export function useAlertContext(): AlertContextProps {
  const context = useContext(AlertContext)

  if (!context) {
    throw new Error('useAlertContext should be used within the AlertContext provider!')
  }

  return context
}
