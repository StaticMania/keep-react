import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTimelineContext } from './TimelineContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the TimelineItem component.
 * @type TimelineItemProps
 * @extends {PropsWithChildren<ComponentProps<'li'>>}
 */
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

export interface TimelineItemStyle {
  horizontal: {
    on: string
    off: string
  }
}

export const TimelineItem: FC<TimelineItemProps> = ({ children, className, ...props }) => {
  const { horizontal } = useTimelineContext()
  const { item } = useTheme().theme.timeline
  return (
    <li
      data-testid="timeline-item"
      className={cn(horizontal ? item.horizontal.on : item.horizontal.off, className)}
      {...props}>
      {children}
    </li>
  )
}
