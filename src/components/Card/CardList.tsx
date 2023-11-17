import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface CardListProps {
  children?: ReactNode
  className?: string
}

export const CardList: React.FC<CardListProps> = ({ children, className }) => {
  return <li className={cn(className)}>{children}</li>
}
