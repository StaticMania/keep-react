import { KeepHeadingLevel } from '../../Keep/KeepTheme'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the TimelineTitle component.
 * @type TimelineTitleProps
 * @extends {PropsWithChildren<ComponentProps<KeepHeadingLevel>>}
 */
export type TimelineTitleProps = PropsWithChildren<
  ComponentProps<KeepHeadingLevel> & {
    /**
     * Additional class name for the component.
     * @type {string}
     * @default ''
     */
    className?: string
    /**
     * The heading level to use for the title.
     * @type {KeepHeadingLevel}
     * @default 'h3'
     */
    as?: KeepHeadingLevel
  }
>

export interface TimelineTitleStyle {
  base: string
}

export const TimelineTitle: FC<TimelineTitleProps> = ({ children, className, as = 'h3', ...props }) => {
  const Tag = as
  const { title } = useTheme().theme.timeline
  return (
    <Tag className={cn(title.base, className)} {...props}>
      {children}
    </Tag>
  )
}
