'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

export interface DescriptionProps {
  children?: ReactNode
  className?: string
}

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  return <p className={cn(alertTheme.description.base, className)}>{children}</p>
}
