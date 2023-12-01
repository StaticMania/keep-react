'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '~/src/Keep/ThemeContext'
import { useAlertContext } from './AlertContext'

export interface IconProps {
  className?: string
  children?: ReactNode
}

export const Icon: FC<IconProps> = ({ children, className }) => {
  const { icon } = useTheme().theme.alert
  const { color = 'primary' } = useAlertContext()
  return <div className={cn(className, icon[color])}>{children}</div>
}
