'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { useTheme } from '../../Keep/ThemeContext'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export interface keepAccordionContainerTheme {
  base: string
  open: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const { isOpen, flush, setIsOpen } = useAccordionContext()
  const { container } = useTheme().theme.accordion
  return (
    <div
      onClick={() => setIsOpen && setIsOpen(!isOpen)}
      className={cn(container.base, !flush && isOpen ? container.open : '', flush && isOpen ? '' : '', className)}>
      {children}
    </div>
  )
}
