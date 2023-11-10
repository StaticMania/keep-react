import { twMerge } from 'tailwind-merge'
import { KeepHeadingLevel } from '../../Keep/KeepTheme'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from '../../Keep/ThemeContex'

export type TimelineTitleProps = PropsWithChildren<
  ComponentProps<KeepHeadingLevel> & {
    className?: string
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
    <Tag className={twMerge(title.base, className)} {...props}>
      {children}
    </Tag>
  )
}
