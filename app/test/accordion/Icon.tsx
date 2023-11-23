'use client'

import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface IconProps {
  children?: ReactNode
  className?: string
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  const { open } = useAccordionContext()
  return (
    <div
      className={cn(
        open ? 'rotate-180 transition-transform duration-300' : 'rotate-90 transition-transform duration-300',
        className,
      )}>
      {children}
    </div>
  )
}
