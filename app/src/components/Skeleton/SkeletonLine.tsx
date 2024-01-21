import { FC } from 'react'
import { cn } from '../../helpers/cn'
import { skeletonTheme } from './theme'

/**
 * Props for the SkeletonLine component.
 * @interface SkeletonProps
 */
export interface SkeletonProps {
  /**
   * The height of the skeleton line.
   * @type {string}
   * @default 'h-4'
   */
  height?: string

  /**
   * Additional CSS class for the component.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const SkeletonLine: FC<SkeletonProps> = ({ height, className }) => {
  const theme = skeletonTheme
  return <div className={cn(theme.line, height, className)}></div>
}
