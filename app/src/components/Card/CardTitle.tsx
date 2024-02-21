import type { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the CardTitle component.
 * @interface CardTitleProps
 */
export interface CardTitleProps {
  /**
   * The content to be rendered inside the CardTitle component.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode

  /**
   * Additional class name(s) for custom styling.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const CardTitle: FC<CardTitleProps> = ({ children, className }) => {
  return <p className={cn('text-body-3 font-bold text-metal-700 md:text-body-1', className)}>{children}</p>
}
