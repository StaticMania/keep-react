'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface BodyProps {
  className?: string
  children?: ReactNode
}

export const Body: FC<BodyProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
