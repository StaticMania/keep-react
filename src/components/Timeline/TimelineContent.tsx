import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTimelineContext } from './TimelineContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export type TimelineContentProps = PropsWithChildren<
  ComponentProps<'div'> & {
    className?: string
  }
>

export interface TimelineContentStyle {
  horizontal: {
    on: string
    off: string
  }
}

export const TimelineContent: FC<TimelineContentProps> = ({ children, className, ...props }) => {
  const { horizontal } = useTimelineContext()
  const { content } = useTheme().theme.timeline
  return (
    <div
      data-testid="timeline-content"
      className={cn(horizontal ? content.horizontal.on : content.horizontal.off, className)}
      {...props}>
      {children}
    </div>
  )
}
