'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '~/src/Keep/ThemeContext'
import { cn } from '~/src/helpers/cn'

export interface PopoverContainerProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

export const Container: FC<PopoverContainerProps> = ({ children, className, ...props }) => {
  const { container } = useTheme().theme.popover
  return (
    <div className={cn(className, container)} {...props}>
      {children}
    </div>
  )
}
