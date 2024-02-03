import { createContext, useContext } from 'react'

type PopoverPropsContext = {
  isTitleExist: boolean
}

export const PopoverContext = createContext<PopoverPropsContext | undefined>(undefined)

export function usePopoverContext(): PopoverPropsContext {
  const context = useContext(PopoverContext)

  if (!context) {
    throw new Error('usePopoverContext should be used within the PopoverContext provider!')
  }

  return context
}
