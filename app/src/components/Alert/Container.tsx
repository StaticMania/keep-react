'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { alertTheme } from './theme'

export interface ContainerProps {
  children?: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(alertTheme.container.base, className)}>{children}</div>
}
