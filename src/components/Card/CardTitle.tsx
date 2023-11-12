import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface CardTitleProps {
  children?: ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return <p className={cn('text-base font-bold tracking-tight text-slate-700 md:text-xl', className)}>{children}</p>
}
