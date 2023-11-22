'use client'
import { FC, ReactNode } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface ContainerProps {
  className?: string
  children?: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  const { container } = useTheme().theme.alert
  return <div className={cn(container, className)}>{children}</div>
}
