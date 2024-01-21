import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { notificationTheme } from './theme'

export interface IconProps {
  children?: ReactNode
  className?: string
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  const { icon } = notificationTheme
  return <div className={cn(icon, className)}>{children}</div>
}
