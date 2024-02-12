'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

export interface GotoProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const GoTo: FC<GotoProps> = ({ className, children, ...props }) => {
  const { goto } = paginationTheme
  return (
    <div className={cn(goto.base, className)} {...props}>
      {children}
    </div>
  )
}
