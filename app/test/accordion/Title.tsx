'use client'

import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

export interface TitleProps {
  children?: ReactNode
  className?: string
}

export const Title: FC<TitleProps> = ({ children, className }) => {
  return <div className={cn('select-none text-body-2 font-medium text-metal-700', className)}>{children}</div>
}
