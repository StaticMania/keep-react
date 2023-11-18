import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface CardListProps {
  children?: ReactNode
  className?: string
}

/**
 * Renders a list item for a card.
 * @param children - The content of the list item.
 * @param className - The CSS class name(s) to apply to the list item.
 * @returns A React component representing a list item for a card.
 */
export const CardList: React.FC<CardListProps> = ({ children, className }) => {
  return <li className={cn(className)}>{children}</li>
}
