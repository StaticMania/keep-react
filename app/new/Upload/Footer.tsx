'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface FooterProps {
  children?: ReactNode
  className?: string
  isFileExists?: boolean
}

export const Footer: FC<FooterProps> = ({ children, className, isFileExists = false }) => {
  return <div className={cn(className)}>{isFileExists ? children : null}</div>
}
