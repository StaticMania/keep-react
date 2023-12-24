import { FC, ReactNode } from 'react'
import { SkeletonAvatar } from './SkeletonAvatar'
import { SkeletonLine } from './SkeletonLine'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepSkeletonTheme {
  base: string
  animation: string
  line: string
  avatar: string
}

/**
 * Props for the keepSkeletonTheme component.
 * @interface keepSkeletonThemeProps
 */
export interface keepSkeletonThemeProps {
  /**
   * Determines whether the animation should be enabled or not.
   */
  animation?: boolean

  /**
   * The children components to be rendered inside the keepSkeletonTheme component.
   */
  children?: ReactNode

  /**
   * Additional CSS class name for the keepSkeletonTheme component.
   */
  className?: string
}

const SkeletonComponent: FC<keepSkeletonThemeProps> = ({ animation = false, className, children }) => {
  const theme = useTheme().theme.skeleton
  return <div className={cn(animation && theme.animation, theme.base, className)}>{children}</div>
}

SkeletonComponent.displayName = 'Skeleton'
SkeletonLine.displayName = 'Skeleton.Line'
SkeletonAvatar.displayName = 'Skeleton.Avatar'

export const Skeleton = Object.assign(SkeletonComponent, {
  Line: SkeletonLine,
  Avatar: SkeletonAvatar,
})
