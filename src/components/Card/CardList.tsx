import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the CardList component.
 * @interface CardListProps
 */
export interface CardListProps {
  /**
   * The children of the CardList component.
   */
  children?: ReactNode

  /**
   * Additional class name for the CardList component.
   */
  className?: string
}

export const CardList: React.FC<CardListProps> = ({ children, className }) => {
  return <li className={cn(className)}>{children}</li>
}
