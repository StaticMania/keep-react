'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface AvatarProps {
  children?: ReactNode
  className?: string
}

export const Avatar: FC<AvatarProps> = ({ children, className }) => {
  const { avatar } = useTheme().theme.notification
  return <div className={cn(avatar, className)}>{children}</div>
}
