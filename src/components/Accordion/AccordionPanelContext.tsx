import { createContext, useContext } from 'react'
import type { AccordionPanelProps } from './AccordionPanel'

type AccordionPanelContext = Omit<AccordionPanelProps, 'children'>

/**
 * The context for the AccordionPanel component.
 */

export const AccordionPanelContext = createContext<AccordionPanelContext | undefined>(undefined)

/**
 * Returns the context value of the AccordionPanelContext.
 * @returns {AccordionPanelContext} The context value of the AccordionPanelContext.
 * @throws {Error} Throws an error if used outside of the AccordionPanelContext provider.
 */
export function useAccordionContext(): AccordionPanelContext {
  const context = useContext(AccordionPanelContext)

  if (!context) {
    throw new Error('useAccordionContext should be used within the AccordionPanelContext provider!')
  }

  return context
}
