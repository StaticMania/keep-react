import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'

/**
 * Props for the CardLink component
 */
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
        className ? className : 'flex items-center gap-1 text-body-6 font-medium text-primary-500 md:text-body-4',
      )}>
      {icon && iconPosition === 'right' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'left' && icon}
    </a>
  )
}
