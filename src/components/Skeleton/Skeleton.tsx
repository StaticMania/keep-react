import { twMerge } from 'tailwind-merge'
import { FC, ReactNode } from 'react'
import { SkeletonAvatar } from './SkeletonAvatar'
import { SkeletonLine } from './SkeletonLine'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepSkeletonTheme {
  base: string
  animation: string
  line: string
  avatar: string
}

export interface keepSkeletonThemeProps {
  animation?: boolean
  children?: ReactNode
}

const SkeletonComponent: FC<keepSkeletonThemeProps> = ({ animation = false, children }) => {
  const theme = useTheme().theme.skeleton
  return <div className={twMerge(animation && theme.animation, theme.base)}>{children}</div>
}

SkeletonComponent.displayName = 'Skeleton'
SkeletonLine.displayName = 'Skeleton.Line'
SkeletonAvatar.displayName = 'Skeleton.Avatar'

export const Skeleton = Object.assign(SkeletonComponent, {
  Line: SkeletonLine,
  Avatar: SkeletonAvatar,
})
