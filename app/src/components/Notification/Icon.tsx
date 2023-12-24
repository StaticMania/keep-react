'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface IconProps {
  children?: ReactNode
  className?: string
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  const { icon } = useTheme().theme.notification
  return <div className={cn(icon, className)}>{children}</div>
}
