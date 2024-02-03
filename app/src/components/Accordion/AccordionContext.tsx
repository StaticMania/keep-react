import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import { AccordionProps } from './Accordion'

type AccordionContextProps = Omit<AccordionProps, 'children'> & {
  setIsOpen?: Dispatch<SetStateAction<boolean>>
  isOpen?: boolean
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
