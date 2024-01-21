import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { notificationTheme } from './theme'

export interface AvatarProps {
  children?: ReactNode
  className?: string
}

export const Avatar: FC<AvatarProps> = ({ children, className }) => {
  const { avatar } = notificationTheme
  return <div className={cn(avatar, className)}>{children}</div>
}
