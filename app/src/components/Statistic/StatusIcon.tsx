import { FC, ReactNode } from 'react'
import { useStatisticContext } from './StatisticContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface keepIconTheme {
  base: string
  selected: {
    on: string
    off: string
  }
}

/**
 * Props for the StatusIcon component.
 * @interface StatusIconProps
 */
export interface StatusIconProps {
  /**
   * The icon to be displayed.
   * @type {ReactNode}
   * @default ''
   */
  icon: ReactNode

  /**
   * Additional CSS class name for the component.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const StatusIcon: FC<StatusIconProps> = ({ icon, className }) => {
  const { iconBg } = useStatisticContext()
  const theme = useTheme().theme.statistic
  return (
    <div
      className={cn(
        theme.icon.base,
        iconBg === 'success' ? theme.icon.selected.on : theme.icon.selected.off,
        className,
      )}>
      {icon}
    </div>
  )
}
