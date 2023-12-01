import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

interface CardDescriptionProps {
  className?: string
  children?: ReactNode
}

export const Description: FC<CardDescriptionProps> = ({ className, children }) => {
  return <p className={cn('text-body-4 font-normal text-metal-500', className)}>{children}</p>
}
