'use client'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import { useAlertContext } from './AlertContext'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface TitleProps {
  className?: string
  children?: ReactNode
}

export const Title: FC<TitleProps> = ({ className, children }) => {
  const { color } = useAlertContext()
  let { title } = useTheme().theme.alert
  let titleClasses = clsx(title.base, title.color[color ? color : 'primary'])
  return <h3 className={cn(titleClasses, className)}>{children}</h3>
}
