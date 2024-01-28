import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { avatarTheme } from './Avatar'

export interface CounterProps {
  children?: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const Counter: FC<CounterProps> = ({ children, className, size = 'xl' }) => {
  return (
    <div
      className={cn(
        avatarTheme.size[size],
        'bg-gradient-1 z-20 flex items-center justify-center rounded-full border-2 border-white text-body-4 font-semibold text-white',
        className,
      )}>
      {children}
    </div>
  )
}
