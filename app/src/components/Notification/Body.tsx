import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { notificationTheme } from './theme'

export interface BodyProps {
  children?: ReactNode
  className?: string
}

export const Body: FC<BodyProps> = ({ children, className }) => {
  const { body } = notificationTheme
  return <div className={cn(body, className)}>{children}</div>
}
