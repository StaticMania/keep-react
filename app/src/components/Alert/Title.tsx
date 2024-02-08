'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

export interface TitleProps {
  children?: ReactNode
  className?: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return <p className={cn(alertTheme.title.base, className)}>{children}</p>
}
