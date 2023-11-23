'use client'

import { FC, ReactNode } from 'react'
import { Collapse } from 'react-collapse'
import { cn } from '~/src/helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface ContentProps {
  children?: ReactNode
  className?: string
}

export const Content: FC<ContentProps> = ({ children, className }) => {
  const { isOpen = false } = useAccordionContext()
  return (
    <Collapse isOpened={isOpen}>
      <div className={cn('p-6 text-body-4 font-normal text-metal-500', className)}>{children}</div>
    </Collapse>
  )
}
