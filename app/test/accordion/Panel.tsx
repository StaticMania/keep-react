'use client'
import React, { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { AccordionContext } from './AccordionContext'

export interface PanelProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export interface keepAccordionPanelTheme {
  base: string
  panelBg: string
}

export const Panel: FC<PanelProps> = ({ children, className, ...props }) => {
  const { isOpen, setIsOpen, flush, openFirstPanel } = props.state
  return (
    <div
      className={cn('group transition-colors duration-200', !flush && 'bg-metal-50', className)}
      {...props}
      onClick={() => setIsOpen(!isOpen)}>
      <AccordionContext.Provider value={{ isOpen, setIsOpen, flush, openFirstPanel }}>
        {children}
      </AccordionContext.Provider>
    </div>
  )
}
