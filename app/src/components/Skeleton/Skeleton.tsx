'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { skeletonTheme } from './theme'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  animation?: boolean
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ animation = true, children, className, ...props }, ref) => {
    const theme = skeletonTheme
    return (
      <div {...props} ref={ref} className={cn(animation && theme.animation, theme.base, className)}>
        {children}
      </div>
    )
  },
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }
