import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the CardTitle component
 */
export interface CardTitleProps {
  children?: ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <p className={cn('text-body-4 font-bold tracking-tight text-metal-700 md:text-body-2', className)}>{children}</p>
  )
}
