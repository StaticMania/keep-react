import type { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { cardTheme } from './theme'

/**
 * Props for the CardDescription component.
 * @interface CardDescriptionProps
 */
export interface CardDescriptionProps {
  /**
   * The content of the CardDescription component.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode

  /**
   * Additional CSS class name for styling.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const CardDescription: FC<CardDescriptionProps> = ({ children, className }) => {
  const theme = cardTheme
  return <p className={cn(theme.description, className)}>{children}</p>
}
