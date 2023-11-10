'use client'
import { Tabs } from '~/src'

const TabsWithNotification = () => {
  return (
    <Tabs aria-label="Keep Tabs" style="default">
      <Tabs.Item title="Inbox" notification={20} notificationColor="info">
        Inbox content
      </Tabs.Item>
      <Tabs.Item title="Cart" notification={12} notificationColor="info">
        Cart content
      </Tabs.Item>
      <Tabs.Item title="Notification" notification={99} notificationColor="info">
        Notification
      </Tabs.Item>
      <Tabs.Item title="Message" notification="new" notificationColor="info">
        Message content
      </Tabs.Item>
    </Tabs>
  )
}

const TabsWithNotificationCode = `
"use client";
import { Tabs } from "keep-react";

export const TabsComponent = () => {
  return (
    <Tabs aria-label="Keep Tabs" style="default">
      <Tabs.Item
        title="Inbox"
        notification={20}
        notificationColor="info">
         Inbox content
      </Tabs.Item>
      <Tabs.Item
        title="Cart"
        notification={12}
        notificationColor="info">
         Cart content
      </Tabs.Item>
      <Tabs.Item
        title="Notification"
        notification={99}
        notificationColor="info"
      >
         Notification
      </Tabs.Item>
      <Tabs.Item
        title="Message"
        notification="new"
        notificationColor="info"
      >
         Message content
      </Tabs.Item>
    </Tabs>
  );
}
`

export { TabsWithNotification, TabsWithNotificationCode }
