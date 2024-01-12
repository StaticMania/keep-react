'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'
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
  const { isOpen, setIsOpen, flush } = props.state
  const { panel } = useTheme().theme.accordion
  return (
    <div className={cn(panel.base, !flush && panel.panelBg, className)} {...props}>
      <AccordionContext.Provider value={{ isOpen, setIsOpen, flush }}>{children}</AccordionContext.Provider>
    </div>
  )
}
