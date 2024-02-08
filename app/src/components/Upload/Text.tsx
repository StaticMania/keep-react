'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface TextProps {
  children?: ReactNode
  className?: string
}

export const Text: FC<TextProps> = ({ children, className }) => {
  return <div className={cn('my-5 space-y-2', className)}>{children}</div>
}
