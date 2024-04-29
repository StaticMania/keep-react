'use client'
import { LiHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { TimelineContent } from './Content'
import { TimelineItem } from './Item'
import { TimelinePoint } from './Point'

const TimelineComponent = forwardRef<HTMLOListElement, LiHTMLAttributes<HTMLOListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ol ref={ref} {...props} className={cn('relative space-y-6 border-l-2 border-metal-100', className)}>
        {children}
      </ol>
    )
  },
)

TimelineComponent.displayName = 'Timeline'

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
})
