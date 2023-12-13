import { createContext, useContext } from 'react'
import { StepsProps } from './Steps'

/**
 * Represents the context type for the Steps component.
 * It is a type that omits the 'children' prop from the StepsProps type.
 * @type {Omit<StepsProps, 'children'>}
 * @interface StepContext
 */
type StepContext = Omit<StepsProps, 'children'>

export const StepContext = createContext<StepContext | undefined>(undefined)

export function useStepContext(): StepContext {
  const context = useContext(StepContext)

  if (!context) {
    throw new Error('useStepContext should be used within the StepContext provider!')
  }

  return context
}
