'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { popoverTheme } from './theme'

export interface PopoverContainerProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Container: FC<PopoverContainerProps> = ({ children, className, ...props }) => {
  const { container } = popoverTheme
  return (
    <div className={cn(className, container)} {...props}>
      {children}
    </div>
  )
}
