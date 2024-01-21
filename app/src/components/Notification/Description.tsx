import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { notificationTheme } from './theme'

export interface DescriptionProps {
  children?: ReactNode
  className?: string
}

export const Description: FC<DescriptionProps> = ({ children, className }) => {
  const { description } = notificationTheme
  return <p className={cn(description, className)}>{children}</p>
}
