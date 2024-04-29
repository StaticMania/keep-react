'use client'
import { createContext, useContext } from 'react'

export type StepPropsContext = {
  active?: boolean
}

export const StepContext = createContext<StepPropsContext | undefined>(undefined)

export function useStepContext(): StepPropsContext {
  const context = useContext(StepContext)

  if (!context) {
    throw new Error('useStepContext should be used within the StepContext provider!')
  }

  return context
}
