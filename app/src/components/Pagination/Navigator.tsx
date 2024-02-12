'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

export interface NavigatorProps {
  children?: ReactNode
  className?: string
  shape?: 'rounded' | 'circle'
  [key: string]: any
}

export const Navigator: FC<NavigatorProps> = ({ className, children, shape = 'rounded', ...props }) => {
  const { navigator } = paginationTheme
  return (
    <button {...props} className={cn(navigator.base, navigator.shape[shape], className)}>
      {children}
    </button>
  )
}
