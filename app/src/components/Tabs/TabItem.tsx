import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { TabNotificationColors } from './theme'

/**
 * Props for the TabItem component.
 * @interface TabItemProps
 * @extends {PropsWithChildren<Omit<ComponentProps<'div'>, 'title'>>}
 */
export interface TabItemProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'title'>> {
  /**
   * The title of the tab item.
   * @type {ReactNode}
   * @default ''
   */
  title: ReactNode

  /**
   * Determines if the tab item is active.
   * @type {boolean}
   * @default false
   */
  active?: boolean

  /**
   * Determines if the tab item is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * The icon of the tab item.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode

  /**
   * The notification count or text of the tab item.
   * @type {number | string}
   * @default ''
   */
  notification?: number | string

  /**
   * The color of the notification for the tab item.
   * @type {keyof TabNotificationColors}
   * @default 'primary'
   */
  notificationColor?: keyof TabNotificationColors

  /**
   * Additional class name for the tab item.
   * @type {string}
   * @default ''
   */
  className?: string
}

export const TabItem: FC<TabItemProps> = ({ children, className }) => <div className={cn(className)}>{children}</div>
