'use client'
import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { SkeletonLine } from './SkeletonLine'
import { skeletonTheme } from './theme'

export interface keepSkeletonThemeProps {
  animation?: boolean
  children?: ReactNode
  className?: string
  [key: string]: any
}

const SkeletonComponent: FC<keepSkeletonThemeProps> = ({ animation = true, className, children, ...props }) => {
  const theme = skeletonTheme
  return (
    <div {...props} className={cn(animation && theme.animation, theme.base, className)}>
      {children}
    </div>
  )
}

SkeletonLine.displayName = 'Skeleton.Line'

export const Skeleton = Object.assign(SkeletonComponent, {
  Line: SkeletonLine,
})
