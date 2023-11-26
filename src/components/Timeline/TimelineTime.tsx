import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTimelineContext } from './TimelineContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the TimelineTime component.
 * @type TimelineTimeProps
 * @extends {PropsWithChildren<ComponentProps<'time'>>}
 */
export type TimelineTimeProps = PropsWithChildren<
  ComponentProps<'time'> & {
    /**
     * Additional class name for the component.
     * @type {string}
     * @default ''
     */
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
