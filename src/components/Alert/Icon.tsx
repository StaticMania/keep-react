'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface IconProps {
  className?: string
  children?: ReactNode
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
