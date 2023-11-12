import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface CardDescriptionProps {
  children?: ReactNode
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
  return <p className={cn('text-xs font-normal text-slate-500 md:text-base', className)}>{children}</p>
}
