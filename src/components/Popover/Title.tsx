'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '~/src/Keep/ThemeContext'
import { cn } from '~/src/helpers/cn'

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
