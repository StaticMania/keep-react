'use client'
import { HTMLAttributes, Ref, forwardRef, useMemo } from 'react'
import { cn } from '../../utils/cn'
import { AccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface keepAccordionPanelTheme {
  flush: {
    on: string
    off: string
  }
}

const AccordionPanel = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    [key: string]: any
  }
>(({ children, className, state: { isOpen, setIsOpen, flush }, ...props }, ref: Ref<HTMLDivElement>) => {
  const { panel } = accordionTheme
  const contextValue = useMemo(() => ({ isOpen, setIsOpen, flush }), [isOpen, setIsOpen, flush])

  return (
    <div className={cn(flush ? panel.flush.on : panel.flush.off, className)} {...props} ref={ref}>
      <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>
    </div>
  )
})

AccordionPanel.displayName = 'AccordionPanel'

export { AccordionPanel }
