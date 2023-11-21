import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the CardLink component.
 * @interface CardLinkProps
 */
export interface CardLinkProps {
  /**
   * The content of the CardLink.
   */
  children?: ReactNode

  /**
   * Additional class name for the CardLink.
   */
  className?: string

  /**
   * The URL to navigate to when the CardLink is clicked.
   */
  href?: string

  /**
   * The icon to display within the CardLink.
   */
  icon?: ReactNode

  /**
   * The position of the icon within the CardLink.
   */
  iconPosition?: 'left' | 'right'
}

export const CardLink: React.FC<CardLinkProps> = ({ children, className, href = '/', icon, iconPosition = 'left' }) => {
  return (
    <a
      href={href}
      className={cn('flex items-center gap-1 text-body-6 font-medium text-primary-500 md:text-body-4', className)}>
      {icon && iconPosition === 'right' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'left' && icon}
    </a>
  )
}
