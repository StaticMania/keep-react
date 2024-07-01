'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../helpers/cn'
import { SkeletonLine } from './SkeletonLine'
import { skeletonTheme } from './theme'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean
}

const SkeletonComponent = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animation = true, children, className, ...props }, ref) => {
    const theme = skeletonTheme
    return (
      <div {...props} ref={ref} className={cn(animation && theme.animation, theme.base, className)}>
        {children}
      </div>
    )
  },
)

SkeletonComponent.displayName = 'Skeleton'

export const Skeleton = Object.assign(SkeletonComponent, {
  Line: SkeletonLine,
})
