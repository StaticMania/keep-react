import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface CardContainerProps {
  children?: ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

export const CardContainer: React.FC<CardContainerProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={cn(className)}>{children}</Tag>
}
