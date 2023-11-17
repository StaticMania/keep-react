import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTimelineContext } from './TimelineContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export type TimelineTimeProps = PropsWithChildren<
  ComponentProps<'time'> & {
    className?: string
  }
>

export interface TimelineTimeStyle {
  base: string
  horizontal: {
    on: string
    off: string
  }
}

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, ...props }) => {
  const { horizontal } = useTimelineContext()
  const { time } = useTheme().theme.timeline
  return (
    <time className={cn(time.base, horizontal ? time.horizontal.on : time.horizontal.off, className)} {...props}>
      {children}
    </time>
  )
}
