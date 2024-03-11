import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { useTimelineContext } from './TimelineContext'
import { timelineTheme } from './theme'

export type TimelineItemProps = PropsWithChildren<
  ComponentProps<'li'> & {
    /**
     * Additional class name for the component.
     * @type {string}
     * @default ''
     */
    className?: string
  }
>

export const TimelineItem: FC<TimelineItemProps> = ({ children, className, ...props }) => {
  const { horizontal } = useTimelineContext()
  const { item } = timelineTheme
  return (
    <li
      data-testid="timeline-item"
      className={cn(horizontal ? item.horizontal.on : item.horizontal.off, className)}
      {...props}>
      {children}
    </li>
  )
}
