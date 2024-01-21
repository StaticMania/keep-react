import type { ReactNode } from 'react'
import { FC } from 'react'
import { cn } from '../../helpers/cn'

/**
 * Props for the NavigationContainer component.
 * @interface NavigationContainerProps
 */
export interface NavigationContainerProps {
  /**
   * The children of the NavigationContainer component.
   */
  children?: ReactNode

  /**
   * The CSS class name for the NavigationContainer component.
   */
  className?: string

  /**
   * The HTML tag to be used for the NavigationContainer component.
   */
  // eslint-disable-next-line no-undef
  tag?: keyof JSX.IntrinsicElements
}

export const NavigationContainer: FC<NavigationContainerProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={cn(className)}>{children}</Tag>
}
