'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { popoverTheme } from './theme'

export interface PopoverTitleProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Title: FC<PopoverTitleProps> = ({ children, className, ...props }) => {
  const { title } = popoverTheme
  return (
    <h3 className={cn(className, title)} {...props}>
      {children}
    </h3>
  )
}
