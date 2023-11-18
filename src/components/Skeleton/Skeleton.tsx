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

export interface keepSkeletonThemeProps {
  animation?: boolean
  children?: ReactNode
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
