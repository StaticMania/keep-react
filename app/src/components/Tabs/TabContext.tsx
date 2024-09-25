'use client'
import { createContext, useContext } from 'react'

export type TabPropsContext = {
  activeItem?: string
  defaultActive?: string
  handleActive: (item: string) => void
  variant?: 'default' | 'fill' | 'underline'
}

export const TabContext = createContext<TabPropsContext | undefined>(undefined)

export function useTabContext(): TabPropsContext {
  const context = useContext(TabContext)

  if (!context) {
    throw new Error('useTabContext should be used within the TabContext provider!')
  }

  return context
}
