import { twMerge } from 'tailwind-merge'
import { useTimelineContext } from './TimelineContext'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { useTheme } from '../../Keep/ThemeContext'

export type TimelinePointProps = PropsWithChildren<
  ComponentProps<'div'> & {
    icon?: ReactNode
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

export interface TimelinePointStyle {
  root: {
    horizontal: {
      on: string
      off: string
    }
    icon: {
      on: {
        base: string
        inner: string
      }
      off: {
        base: string
      }
    }
  }
}

export const TimelinePoint: FC<TimelinePointProps> = ({ children, className, icon: Icon, ...props }) => {
  const { horizontal, gradientPoint, gradientColor } = useTimelineContext()
  const { point } = useTheme().theme.timeline
  return (
    <div
      data-testid="timeline-point"
      className={twMerge(horizontal ? point.root.horizontal.on : point.root.horizontal.off, className)}
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
          className={twMerge(
            point.root.icon.off.base,
            gradientPoint && gradientColor ? gradientColor : 'bg-gradient-9',
            !gradientPoint && 'bg-metal-200',
          )}></div>
      )}
    </div>
  )
}
