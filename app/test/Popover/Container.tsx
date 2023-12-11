'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

export interface PopoverContainerProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Container: FC<PopoverContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(className, 'mt-4 flex items-center gap-3')} {...props}>
      {children}
    </div>
  )
}
