'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface TextProps {
  children?: ReactNode
  className?: string
}

export const Text: FC<TextProps> = ({ children, className }) => {
  return <div className={cn(className, 'my-5 space-y-2')}>{children}</div>
}
