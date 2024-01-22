'use client'
import { createContext, useContext } from 'react'

export type SidebarItemPropsContext = {
  isInsideCollapse: boolean
}

export const SidebarItemContext = createContext<SidebarItemPropsContext | undefined>(undefined)

export function useSidebarItemContext(): SidebarItemPropsContext {
  const context = useContext(SidebarItemContext)

  if (!context) {
    throw new Error('useSidebarItemContext should be used within the SidebarItemContext provider!')
  }

  return context
}
