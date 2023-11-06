import type { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import type { TabNotificationColors } from ".";

export interface TabItemProps
  extends PropsWithChildren<Omit<ComponentProps<"div">, "title">> {
  title: ReactNode;
  active?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  notification?: number | string;
  notificationColor?: keyof TabNotificationColors;
}

export const TabItem: FC<TabItemProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
