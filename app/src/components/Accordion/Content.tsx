'use client'
import { FC, ReactNode } from 'react'
import { Collapse } from 'react-collapse'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'
import { cn } from '../../helpers/cn'

export interface ContentProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export interface keepAccordionContentTheme {
  base: string
}

export const Content: FC<ContentProps> = ({ children, className, ...otherProps }) => {
  const { isOpen = false } = useAccordionContext()
  const { content } = accordionTheme
  return (
    <Collapse isOpened={isOpen}>
      <div role="contentinfo" {...otherProps} className={cn(content.base, className)}>
        {children}
      </div>
    </Collapse>
  )
}
