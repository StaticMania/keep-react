'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { playTheme } from './theme'

export interface PlayerProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Player: FC<PlayerProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn(playTheme.player, className)}>
      {children}
    </div>
  )
}
