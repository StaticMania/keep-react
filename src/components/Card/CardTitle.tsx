import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'

/**
 * Props for the CardTitle component
 */
export interface CardTitleProps {
  children?: ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <p
      className={twMerge(className ? className : 'text-body-4 font-bold tracking-tight text-metal-700 md:text-body-2')}>
      {children}
    </p>
  )
}
