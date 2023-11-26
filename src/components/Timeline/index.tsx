import type { FC, PropsWithChildren } from 'react'
import { TimelineBody, TimelineBodyStyle } from './TimelineBody'
import { TimelineContent, TimelineContentStyle } from './TimelineContent'
import { TimelineContext } from './TimelineContext'
import { TimelineItem, TimelineItemStyle } from './TimelineItem'
import { TimelinePoint, TimelinePointStyle } from './TimelinePoint'
import { TimelineTime, TimelineTimeStyle } from './TimelineTime'
import { TimelineTitle, TimelineTitleStyle } from './TimelineTitle'
import { KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface TimelinePointSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string
}

export interface TimelinePointColor extends Pick<KeepColors, 'info' | 'error' | 'success' | 'warning' | 'gray'> {
  [key: string]: string
}

/**
 * Props for the Timeline component.
 * @type {TimelineProps}
 */
export type TimelineProps = PropsWithChildren<{
  /**
   * Additional class name for the Timeline component.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * Determines if the timeline should be displayed horizontally.
   * @type {boolean}
   * @default false
   */
  horizontal?: boolean

  /**
   * Determines if the timeline should have a gradient point.
   * @type {boolean}
   * @default false
   */
  gradientPoint?: boolean

  /**
   * The color of the gradient.
   * @type {keyof TimelinePointColor}
   * @default 'info'
   */
  gradientColor?: string

  /**
   * The type of the timeline bar.
   * - 'solid': Solid line.
   * - 'dashed': Dashed line.
   * @type {'solid' | 'dashed'}
   * @default 'solid'
   */
  timelineBarType?: 'solid' | 'dashed'
}>

export interface keepTimelineTheme {
  root: TimelineComponentStyle
  body: TimelineBodyStyle
  content: TimelineContentStyle
  item: TimelineItemStyle
  point: TimelinePointStyle
  time: TimelineTimeStyle
  title: TimelineTitleStyle
}

interface TimelineComponentStyle {
  horizontal: {
    on: string
    off: string
  }
  barType: {
    solid: string
    dashed: string
  }
}

const TimelineComponent: FC<TimelineProps> = ({
  children,
  horizontal,
  gradientPoint,
  timelineBarType = 'solid',
  gradientColor,
  className,
}) => {
  const { root } = useTheme().theme.timeline
  return (
    <TimelineContext.Provider value={{ horizontal, gradientPoint, gradientColor }}>
      <ol
        data-testid="timeline-component"
        className={cn(
          !horizontal && root.horizontal.off,
          horizontal && root.horizontal.on,
          timelineBarType === 'solid' && root.barType.solid,
          timelineBarType === 'dashed' && root.barType.dashed,
          className,
        )}>
        {children}
      </ol>
    </TimelineContext.Provider>
  )
}

TimelineComponent.displayName = 'Timeline'
TimelineItem.displayName = 'Timeline.Item'
TimelinePoint.displayName = 'Timeline.Point'
TimelineContent.displayName = 'Timeline.Content'
TimelineTime.displayName = 'Timeline.Time'
TimelineTitle.displayName = 'Timeline.Title'
TimelineBody.displayName = 'Timeline.Body'

export const Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody,
})
