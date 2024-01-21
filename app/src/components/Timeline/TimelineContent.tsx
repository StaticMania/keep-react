import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { useTimelineContext } from './TimelineContext'
import { timelineTheme } from './theme'

/**
 * Props for the TimelineContent component.
 * @type TimelineContentProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export type TimelineContentProps = PropsWithChildren<
  ComponentProps<'div'> & {
    /**
     * Additional class name for the component.
     */
    className?: string
  }
>

export const TimelineContent: FC<TimelineContentProps> = ({ children, className, ...props }) => {
  const { horizontal } = useTimelineContext()
  const { content } = timelineTheme
  return (
    <div
      data-testid="timeline-content"
      className={cn(horizontal ? content.horizontal.on : content.horizontal.off, className)}
      {...props}>
      {children}
    </div>
  )
}
