'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepTitleTheme {
  base: string
}

export interface TitleProps {
  className?: string
  children?: ReactNode
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const { title } = useTheme().theme.empty
  return <h1 className={cn(title.base, className)}>{children}</h1>
}
