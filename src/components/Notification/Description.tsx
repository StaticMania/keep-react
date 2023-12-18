'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface DescriptionProps {
  children?: ReactNode
  className?: string
}

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  const { description } = useTheme().theme.notification
  return <p className={cn(description, className)}>{children}</p>
}
