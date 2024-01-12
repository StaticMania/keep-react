'use client'
import { FC, ReactNode } from 'react'
import { Collapse } from 'react-collapse'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'

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
  const { content } = useTheme().theme.accordion
  return (
    <Collapse isOpened={isOpen}>
      <div role="contentinfo" {...otherProps} className={cn(content.base, className)}>
        {children}
      </div>
    </Collapse>
  )
}
