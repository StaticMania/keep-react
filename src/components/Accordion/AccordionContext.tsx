import { createContext, useContext } from 'react'
import { AccordionProps } from './Accordion'

type AccordionContext = Omit<AccordionProps, 'children'> & {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  isOpen?: boolean
  flush?: boolean
}

export const AccordionContext = createContext<AccordionContext | undefined>(undefined)

export function useAccordionContext(): AccordionContext {
  const context = useContext(AccordionContext)

  if (!context) {
    throw new Error('useAccordionContext should be used within the AccordionContext provider!')
  }

  return context
}
