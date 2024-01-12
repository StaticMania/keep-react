'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'

export interface IconProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export interface keepAccordionIconTheme {
  base: string
  rotated: {
    full: string
    half: string
  }
}

export const Icon: FC<IconProps> = ({ children, className, ...otherProps }) => {
  const { isOpen } = useAccordionContext()
  const { icon } = useTheme().theme.accordion
  return (
    <div {...otherProps} className={cn(icon.base, isOpen ? icon.rotated.full : icon.rotated.half, className)}>
      {children}
    </div>
  )
}
