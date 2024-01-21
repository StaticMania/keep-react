'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

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
  const { isOpen, setIsOpen } = useAccordionContext()
  const { container } = accordionTheme
  return (
    <div {...otherProps} onClick={() => setIsOpen && setIsOpen(!isOpen)} className={cn(container.base, className)}>
      {children}
    </div>
  )
}
