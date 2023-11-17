import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import type { TabNotificationColors } from '.'
import { cn } from '../../helpers/cn'

export interface TabItemProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'title'>> {
  title: ReactNode
  active?: boolean
  disabled?: boolean
  icon?: ReactNode
  notification?: number | string
  notificationColor?: keyof TabNotificationColors
  className?: string
}

export const TabItem: FC<TabItemProps> = ({ children, className }) => <div className={cn(className)}>{children}</div>
