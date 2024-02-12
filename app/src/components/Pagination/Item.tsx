'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { usePaginationContext } from './Context'
import { paginationTheme } from './theme'

export interface ItemProps {
  children?: ReactNode
  className?: string
  active?: boolean
  [key: string]: any
}

export const Item: FC<ItemProps> = ({ className, children, active = false, ...props }) => {
  const { shape = 'rounded' } = usePaginationContext()
  const { item } = paginationTheme
  return (
    <li {...props}>
      <button className={cn(item.base, item.active[active ? 'on' : 'off'], item.shape[shape], className)}>
        {children}
      </button>
    </li>
  )
}
