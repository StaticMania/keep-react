import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'

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
      className={twMerge(
        className ? className : 'flex items-center gap-1 text-xs font-medium text-primary-500 md:text-base',
      )}>
      {icon && iconPosition === 'right' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'left' && icon}
    </a>
  )
}
