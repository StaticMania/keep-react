import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

interface CardTitleProps {
  className?: string
  children?: ReactNode
}

export const Title: FC<CardTitleProps> = ({ className, children }) => {
  return <h3 className={cn('text-body-1 font-semibold text-metal-700', className)}>{children}</h3>
}
