'use client'
import { createContext, useContext } from 'react'

type ProgressContextProps = {
  progressBar?: number
  lineProgressBar?: number
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const ProgressContext = createContext<ProgressContextProps | undefined>(undefined)

export function useProgressContext(): ProgressContextProps {
  const context = useContext(ProgressContext)

  if (!context) {
    throw new Error('useProgressContext should be used within the ProgressContext provider!')
  }

  return context
}
