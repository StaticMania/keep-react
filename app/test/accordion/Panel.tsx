'use client'
import React, { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { AccordionContext } from './AccordionContext'

export interface PanelProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Panel: FC<PanelProps> = ({ children, className, ...props }) => {
  const { isOpen, setIsOpen } = props.state
  return (
    <div
      className={cn('group bg-metal-50 transition-colors duration-200', className)}
      {...props}
      onClick={() => setIsOpen(!isOpen)}>
      <AccordionContext.Provider value={{ isOpen, setIsOpen }}>{children}</AccordionContext.Provider>
    </div>
  )
}
