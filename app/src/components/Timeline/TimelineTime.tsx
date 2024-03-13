import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { useTimelineContext } from './TimelineContext'
import { timelineTheme } from './theme'

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

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, ...props }) => {
  const { horizontal } = useTimelineContext()
  const { time } = timelineTheme
  return (
    <time className={cn(time.base, horizontal ? time.horizontal.on : time.horizontal.off, className)} {...props}>
      {children}
    </time>
  )
}
