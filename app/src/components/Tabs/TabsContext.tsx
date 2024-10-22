'use client'
import { createContext, useContext } from 'react'

type TabsContextProps = {
  variant: 'default' | 'fill' | 'underline'
}

export const TabsContext = createContext<TabsContextProps | undefined>(undefined)

export function useTabsContext(): TabsContextProps {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('useTabsContext should be used within the TabsContext provider!')
  }

  return context
}
