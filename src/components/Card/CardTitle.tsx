import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'

export interface CardTitleProps {
  children?: ReactNode
  className?: string
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <p
      className={twMerge(className ? className : 'text-metal-700 text-body-4 font-bold tracking-tight md:text-body-2')}>
      {children}
    </p>
  )
}
