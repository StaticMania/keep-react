'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'
import { Typography } from '../Typography'

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
    <Typography variant="h3" {...otherProps} className={cn(title.base, className)}>
      {children}
    </Typography>
  )
}
