'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface PopoverTitleProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Title: FC<PopoverTitleProps> = ({ children, className, ...props }) => {
  const { title } = useTheme().theme.popover
  return (
    <h3 className={cn(className, title)} {...props}>
      {children}
    </h3>
  )
}
