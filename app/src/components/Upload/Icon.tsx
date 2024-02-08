'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface IconProps {
  children?: ReactNode
  className?: string
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  return (
    <div className={cn('flex h-16 w-16 items-center justify-center rounded-full bg-primary-50', className)}>
      {children}
    </div>
  )
}
