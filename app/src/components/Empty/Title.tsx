'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { emptyTheme } from './theme'

export interface TitleProps {
  className?: string
  children?: ReactNode
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  const { title } = emptyTheme
  return <h1 className={cn(title.base, className)}>{children}</h1>
}
