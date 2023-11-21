import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

/**
 * Props for the CardDescription component.
 * @interface CardDescriptionProps
 */
export interface CardDescriptionProps {
  /**
   * The content of the CardDescription component.
   */
  children?: ReactNode

  /**
   * Additional CSS class name for styling.
   */
  className?: string
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
  const theme = useTheme().theme.card.description
  return <p className={cn(theme, className)}>{children}</p>
}
