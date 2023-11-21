import type { ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the CardContainer component.
 * @interface CardContainerProps
 */
export interface CardContainerProps {
  /**
   * The content to be rendered inside the CardContainer.
   */
  children?: ReactNode

  /**
   * Additional CSS class name(s) to be applied to the CardContainer.
   */
  className?: string

  /**
   * The HTML tag to be used for the CardContainer.
   */
  tag?: keyof JSX.IntrinsicElements
}

export const CardContainer: React.FC<CardContainerProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={cn(className)}>{children}</Tag>
}
