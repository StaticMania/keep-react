'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface TitleProps {
  children?: ReactNode
  className?: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const { title } = useTheme().theme.notification
  return <h2 className={cn(title, className)}>{children}</h2>
}
