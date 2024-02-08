'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface ButtonGroupProps {
  className?: string
  children?: ReactNode
  [key: string]: any
}

export const ButtonGroup: FC<ButtonGroupProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn('flex items-center', className)}>
      {children}
    </div>
  )
}
