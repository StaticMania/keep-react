import type { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the CardLink component.
 * @interface CardLinkProps
 */
export interface CardLinkProps {
  /**
   * The content of the CardLink.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode

  /**
   * Additional class name for the CardLink.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The URL to navigate to when the CardLink is clicked.
   * @type {string}
   * @default '/' (root)
   */
  href?: string

  /**
   * The icon to display within the CardLink.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode

  /**
   * The position of the icon within the CardLink.
   * @type {'left' | 'right'}
   * @default 'left'
   */
  iconPosition?: 'left' | 'right'
}

export const CardLink: FC<CardLinkProps> = ({ children, className, href = '/', icon, iconPosition = 'left' }) => {
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
