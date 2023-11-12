import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface CardLinkProps {
  children?: ReactNode
  className?: string
  href?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export const CardLink: React.FC<CardLinkProps> = ({ children, className, href = '/', icon, iconPosition = 'left' }) => {
  return (
    <a
      href={href}
      className={cn('flex items-center gap-1 text-xs font-medium text-primary-500 md:text-base', className)}>
      {icon && iconPosition === 'right' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'left' && icon}
    </a>
  )
}
