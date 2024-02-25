/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useContext } from 'react'
import { SelectProps } from './Select'

type SelectContextProps = Omit<SelectProps, 'children'> & {
  handleSelect?: (selectedItem: string, item: ReactNode) => void
}

export const SelectContext = createContext<SelectContextProps | undefined>(undefined)

export function useSelectContext(): SelectContextProps {
  const context = useContext(SelectContext)

  if (!context) {
    throw new Error('useSelectContext should be used within the SelectContext provider!')
  }

  return context
}
