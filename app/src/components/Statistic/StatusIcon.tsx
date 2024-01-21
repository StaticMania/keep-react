import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useStatisticContext } from './StatisticContext'
import { statisticsTheme } from './theme'

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
  const theme = statisticsTheme
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
