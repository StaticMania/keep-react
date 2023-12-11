'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface TitleProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}
export interface keepAccordionTitleTheme {
  base: string
}

export const Title: FC<TitleProps> = ({ children, className, ...otherProps }) => {
  const { title } = useTheme().theme.accordion
  return (
    <div {...otherProps} className={cn(title.base, className)}>
      {children}
    </div>
  )
}
