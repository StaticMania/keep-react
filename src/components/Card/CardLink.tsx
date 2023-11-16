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
        className ? className : 'md:text-body-4 text-body-6 flex items-center gap-1 font-medium text-primary-500',
      )}>
      {icon && iconPosition === 'right' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'left' && icon}
    </a>
  )
}
