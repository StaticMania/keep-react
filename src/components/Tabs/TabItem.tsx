import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import type { TabNotificationColors } from '.'
import { cn } from '../../helpers/cn'

/**
 * Props for the TabItem component.
 */
export interface TabItemProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'title'>> {
  /**
   * The title of the tab item.
   */
  title: ReactNode
  /**
   * Determines if the tab item is active.
   */
  active?: boolean
  /**
   * Determines if the tab item is disabled.
   */
  disabled?: boolean
  /**
   * The icon of the tab item.
   */
  icon?: ReactNode
  /**
   * The notification count or text of the tab item.
   */
  notification?: number | string
  /**
   * The color of the notification for the tab item.
   */
  notificationColor?: keyof TabNotificationColors
  /**
   * Additional class name for the tab item.
   */
  className?: string
}

export const TabItem: FC<TabItemProps> = ({ children, className }) => <div className={cn(className)}>{children}</div>
