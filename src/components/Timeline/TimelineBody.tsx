import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

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

export interface TimelineBodyStyle {
  base: string
}
export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, ...props }) => {
  const { body } = useTheme().theme.timeline
  return (
    <p className={cn(body.base, className)} {...props}>
      {children}
    </p>
  )
}
