import { createContext, useContext } from 'react'

type PopoverContext = {
  isTitleExist: boolean
}

export const PopoverContext = createContext<PopoverContext | undefined>(undefined)

export function usePopoverContext(): PopoverContext {
  const context = useContext(PopoverContext)

  if (!context) {
    throw new Error('usePopoverContext should be used within the PopoverContext provider!')
  }

  return context
}
