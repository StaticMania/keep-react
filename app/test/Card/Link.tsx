'use client'
import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

interface CardLinkProps {
  className?: string
  children?: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const Link: FC<CardLinkProps> = ({ className, children, icon, iconPosition = 'right' }) => {
  return (
    <div
      className={cn(
        'group max-w-[140px] cursor-pointer text-body-4 font-medium text-primary-500 hover:text-primary-600',
        icon && 'flex items-center gap-2',
        className,
      )}>
      {icon && iconPosition === 'left' && <span className="duration-300 group-hover:translate-x-0.5">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </div>
  )
}
