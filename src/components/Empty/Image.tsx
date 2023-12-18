'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface ImageProps {
  className?: string
  children?: ReactNode
}

export const Image: FC<ImageProps> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>
}
