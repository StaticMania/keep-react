import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '~/src/Keep/ThemeContext'

export interface CardDescriptionProps {
  children?: ReactNode
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
  const theme = useTheme().theme.card.description
  return (
    <p className={cn(theme ,className)}>
      {children}
    </p>
  )
}
