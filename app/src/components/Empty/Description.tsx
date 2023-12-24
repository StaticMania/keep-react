'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepDescriptionTheme {
  base: string
}

export interface DescriptionProps {
  className?: string
  children?: ReactNode
}

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  const { description } = useTheme().theme.empty
  return <p className={cn(description.base, className)}>{children}</p>
}
