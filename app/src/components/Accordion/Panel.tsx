'use client'
import { FC, ReactNode } from 'react'
import { AccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'
import { cn } from '../../helpers/cn'

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
  return (
    <div
      className={cn(flush ? panel.flush.on : panel.flush.off, !flush && isOpen && 'shadow-large', className)}
      {...props}>
      <AccordionContext.Provider value={{ isOpen, setIsOpen, flush }}>{children}</AccordionContext.Provider>
    </div>
  )
}
