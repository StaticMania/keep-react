import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'

export interface CardContainerProps {
  children?: ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

export const CardContainer: React.FC<CardContainerProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={twMerge(className)}>{children}</Tag>
}
