import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from '../../Keep/ThemeContext'

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
    <p className={twMerge(body.base, className)} {...props}>
      {children}
    </p>
  )
}
