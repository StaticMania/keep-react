import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTheme } from '../../Keep/ThemeContext'

export interface CardDescriptionProps {
  children?: ReactNode
  className?: string
}

/**
 * Renders the description of a card.
 * @param children - The content to be displayed as the description.
 * @param className - Additional class name(s) for the component.
 * @returns A React component representing the card description.
 */
export const CardDescription: React.FC<CardDescriptionProps> = ({ children, className }) => {
  const theme = useTheme().theme.card.description
  return <p className={cn(theme, className)}>{children}</p>
}
