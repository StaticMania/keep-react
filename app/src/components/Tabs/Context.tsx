/* eslint-disable no-unused-vars */
'use client'
import { createContext, useContext } from 'react'

export type TabsPropsContext = {
  activeItem?: string
  vertical?: boolean
  handleActive?: (item: string) => void
}

export const TabsContext = createContext<TabsPropsContext | undefined>(undefined)

export function useTabsContext(): TabsPropsContext {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('useTabsContext should be used within the TabsContext provider!')
  }

  return context
}
