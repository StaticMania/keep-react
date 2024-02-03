'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface BodyProps {
  children?: ReactNode
  className?: string
}

export const Body: FC<BodyProps> = ({ children, className }) => {
  const { body } = useTheme().theme.notification
  return <div className={cn(body, className)}>{children}</div>
}
