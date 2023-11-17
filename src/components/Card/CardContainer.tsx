import { twMerge } from 'tailwind-merge'
import type { ReactNode } from 'react'

export interface CardContainerProps {
  children?: ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

/**
 * A container component for cards.
 * @param children - The content of the card container.
 * @param className - The CSS class name for the card container.
 * @param tag - The HTML tag for the card container. Defaults to 'div'.
 * @returns A React functional component.
 */
export const CardContainer: React.FC<CardContainerProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={twMerge(className)}>{children}</Tag>
}
