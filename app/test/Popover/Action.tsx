'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

export interface PopoverActionProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Action: FC<PopoverActionProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}
