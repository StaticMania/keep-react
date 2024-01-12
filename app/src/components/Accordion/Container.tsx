'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface ContainerProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export interface keepAccordionContainerTheme {
  base: string
  open: string
}

export const Container: FC<ContainerProps> = ({ children, className, ...otherProps }) => {
  const { isOpen, flush, setIsOpen } = useAccordionContext()
  const { container } = useTheme().theme.accordion
  return (
    <div
      {...otherProps}
      onClick={() => setIsOpen && setIsOpen(!isOpen)}
      className={cn(container.base, !flush && isOpen ? container.open : '', flush && isOpen ? '' : '', className)}>
      {children}
    </div>
  )
}
