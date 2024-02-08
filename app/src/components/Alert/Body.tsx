'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface AlertBodyProps {
  children?: ReactNode
  className?: string
}

export const Body: FC<AlertBodyProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
