import { FC } from 'react'
import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

export interface NavigationContainerProps {
  children?: ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

export const NavigationContainer: FC<NavigationContainerProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={cn(className)}>{children}</Tag>
}
