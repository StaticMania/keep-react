'use client'
import { createContext, useContext } from 'react'

type AccordionContextProps = {
  flush?: boolean
}

export const AccordionContext = createContext<AccordionContextProps | undefined>(undefined)

export function useAccordionContext(): AccordionContextProps {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('useAccordionContext should be used within the AccordionContext provider!')
  }
  return context
}
