import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useTimelineContext } from './TimelineContext'
import { timelineTheme } from './theme'

/**
 * Props for the TimelinePoint component.
 * @type TimelinePointProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export type TimelinePointProps = PropsWithChildren<
  ComponentProps<'div'> & {
    /**
     * The icon to be displayed in the TimelinePoint.
     * @type {ReactNode}
     * @default ''
     */
    icon?: ReactNode
    /**
     * Additional class name for the TimelinePoint.
     * @type {string}
     * @default ''
     */
    className?: string
  }
>

export const gradientColor: string[] = [
  'bg-gradient-1',
  'bg-gradient-2',
  'bg-gradient-3',
  'bg-gradient-4',
  'bg-gradient-5',
  'bg-gradient-6',
  'bg-gradient-7',
  'bg-gradient-8',
  'bg-gradient-9',
  'bg-gradient-10',
  'bg-gradient-11',
  'bg-gradient-12',
  'bg-gradient-13',
  'bg-gradient-14',
  'bg-gradient-15',
  'bg-gradient-16',
  'bg-gradient-17',
  'bg-gradient-18',
  'bg-gradient-19',
  'bg-gradient-20',
  'bg-gradient-21',
  'bg-gradient-22',
  'bg-gradient-23',
  'bg-gradient-24',
  'bg-gradient-25',
  'bg-gradient-26',
  'bg-gradient-27',
  'bg-gradient-28',
  'bg-gradient-29',
  'bg-gradient-30',
  'bg-gradient-31',
]

export const TimelinePoint: FC<TimelinePointProps> = ({ children, className, icon: Icon, ...props }) => {
  const { horizontal, gradientPoint, gradientColor } = useTimelineContext()
  const { point } = timelineTheme
  return (
    <div
      data-testid="timeline-point"
      className={cn(horizontal ? point.root.horizontal.on : point.root.horizontal.off, className)}
      {...props}>
      {children}
      {Icon ? (
        <span className={point.root.icon.on.base}>
          <span aria-hidden className={point.root.icon.on.inner}>
            {Icon}
          </span>
        </span>
      ) : (
        <div
          className={cn(
            point.root.icon.off.base,
            gradientPoint && gradientColor ? gradientColor : 'bg-gradient-9',
            !gradientPoint && 'bg-metal-200',
          )}></div>
      )}
    </div>
  )
}
