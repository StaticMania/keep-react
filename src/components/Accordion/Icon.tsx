'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { useTheme } from '~/src/Keep/ThemeContext'

export interface IconProps {
  children?: ReactNode
  className?: string
}

export interface keepAccordionIconTheme {
  base: string
  rotated: {
    full: string
    half: string
  }
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  const { isOpen } = useAccordionContext()
  const { icon } = useTheme().theme.accordion
  return <div className={cn(icon.base, isOpen ? icon.rotated.full : icon.rotated.half, className)}>{children}</div>
}
