'use client'
import { FC, ReactNode, useMemo } from 'react'
import { cn } from '../../helpers/cn'
import { AccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface PanelProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export interface keepAccordionPanelTheme {
  flush: {
    on: string
    off: string
  }
}

export const Panel: FC<PanelProps> = ({ children, className, ...props }) => {
  const { isOpen, setIsOpen, flush } = props.state
  const { panel } = accordionTheme

  const contextValue = useMemo(() => ({ isOpen, setIsOpen, flush }), [isOpen, setIsOpen, flush])
  return (
    <div
      className={cn(flush ? panel.flush.on : panel.flush.off, !flush && isOpen && 'shadow-large', className)}
      {...props}>
      <AccordionContext.Provider value={contextValue}>{children}</AccordionContext.Provider>
    </div>
  )
}
