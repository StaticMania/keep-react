import type { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the CardContainer component.
 * @interface CardContainerProps
 */
export interface CardContainerProps {
  /**
   * The content to be rendered inside the CardContainer.
   * @type {ReactNode}
   * @default ''
   */
  children?: ReactNode

  /**
   * Additional CSS class name(s) to be applied to the CardContainer.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The HTML tag to be used for the CardContainer.
   * @type {keyof JSX.IntrinsicElements}
   * @default 'div'
   */
  // eslint-disable-next-line no-undef
  tag?: keyof JSX.IntrinsicElements
}

export const CardContainer: FC<CardContainerProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={cn(className)}>{children}</Tag>
}
