'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface TitleProps {
  children?: ReactNode
  className?: string
}
export interface keepAccordionTitleTheme {
  base: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const { title } = useTheme().theme.accordion
  return <div className={cn(title.base, className)}>{children}</div>
}
