'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { notificationTheme } from './theme'

export interface TitleProps {
  children?: ReactNode
  className?: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const { title } = notificationTheme
  return <h2 className={cn(title, className)}>{children}</h2>
}
