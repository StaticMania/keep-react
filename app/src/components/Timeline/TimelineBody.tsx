import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { timelineTheme } from './theme'

/**
 * Props for the TimelineBody component.
 * @type TimelineBodyProps
 * @extends {PropsWithChildren<ComponentProps<'p'>>}
 */
export type TimelineBodyProps = PropsWithChildren<
  ComponentProps<'p'> & {
    /**
     * Additional CSS class names for the component.
     * @type {string}
     * @default ''
     */
    className?: string
  }
>

export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, ...props }) => {
  const { body } = timelineTheme
  return (
    <p className={cn(body.base, className)} {...props}>
      {children}
    </p>
  )
}
