import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

interface CardBodyProps {
  className?: string
  children?: ReactNode
}

export const Body: FC<CardBodyProps> = ({ className, children }) => {
  return <div className={cn(className)}>{children}</div>
}
