'use client'

import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const { isOpen } = useAccordionContext()
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center justify-between px-5 py-[18px] group-hover:bg-metal-100',
        isOpen ? 'border-b border-b-metal-300 bg-metal-200/50 group-hover:bg-metal-200/50' : '',
        className,
      )}>
      {children}
    </div>
  )
}
