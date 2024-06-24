'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { skeletonTheme } from './theme'

const SkeletonLine = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const theme = skeletonTheme
  return <div {...props} ref={ref} className={cn(theme.line, className)}></div>
})

SkeletonLine.displayName = 'Skeleton.Line'

export { SkeletonLine }
