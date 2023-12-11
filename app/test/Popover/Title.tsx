'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

export interface PopoverTitleProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Title: FC<PopoverTitleProps> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn(className, 'max-w-[92%] text-body-2 font-medium text-metal-700')} {...props}>
      {children}
    </h3>
  )
}
