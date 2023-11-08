import { createContext, useContext } from 'react'
import { StepsProps } from './Steps'

type StepContext = Omit<StepsProps, 'children'>

export const StepContext = createContext<StepContext | undefined>(undefined)

export function useStepContext(): StepContext {
  const context = useContext(StepContext)

  if (!context) {
    throw new Error('useStepContext should be used within the StepContext provider!')
  }

  return context
}
