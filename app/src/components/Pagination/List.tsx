'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { paginationTheme } from './theme'

export interface ListProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const List: FC<ListProps> = ({ className, children, ...props }) => {
  const { list } = paginationTheme
  return (
    <ul className={cn(list.base, className)} {...props}>
      {children}
    </ul>
  )
}
