import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export type TimelineBodyProps = PropsWithChildren<
  ComponentProps<'p'> & {
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
