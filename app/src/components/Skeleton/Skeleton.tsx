'use client'
import { FC, forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../helpers/cn'
import { SkeletonLine } from './SkeletonLine'
import { skeletonTheme } from './theme'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean
}

const SkeletonComponent: FC<SkeletonProps> = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animation = true, children, ...props }, ref) => {
    const theme = skeletonTheme
    return (
      <div {...props} ref={ref} className={cn(animation && theme.animation, theme.base, props.className)}>
        {children}
      </div>
    )
  },
)

SkeletonComponent.displayName = 'Skeleton'

export const Skeleton = Object.assign(SkeletonComponent, {
  Line: SkeletonLine,
})
