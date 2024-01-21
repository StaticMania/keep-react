'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { emptyTheme } from './theme'

export interface DescriptionProps {
  className?: string
  children?: ReactNode
}

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  const { description } = emptyTheme
  return <p className={cn(description.base, className)}>{children}</p>
}
