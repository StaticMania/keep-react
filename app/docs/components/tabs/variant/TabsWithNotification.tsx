"use client";
import { Tabs } from "~/src";

const TabsWithNotification = () => {
  return (
    <Tabs aria-label="Default tabs" style="default">
      <Tabs.Item title="Inbox" notification={20}>
        Inbox content
      </Tabs.Item>
      <Tabs.Item title="Cart" notification={12}>
        Cart content
      </Tabs.Item>
      <Tabs.Item title="Notification" notification={99}>
        Notification
      </Tabs.Item>
      <Tabs.Item title="Message" notification="new">
        Message content
      </Tabs.Item>
    </Tabs>
  );
};

const TabsWithNotificationCode = `
"use client";
import { Tabs } from "keep-react";

export const TabsComponent = () => {
  return (
    <Tabs aria-label="Tabs" style="default">
      <Tabs.Item title="Inbox" notification={20}>
        Inbox content
      </Tabs.Item>
      <Tabs.Item title="Cart" notification={12}>
        Cart content
      </Tabs.Item>
      <Tabs.Item title="Cart" notification={99}>
        Notification
      </Tabs.Item>
      <Tabs.Item title="Message" notification="new">
        Message content
      </Tabs.Item>
    </Tabs>
  );
};
`;

export { TabsWithNotification, TabsWithNotificationCode };
