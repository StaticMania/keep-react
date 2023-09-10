"use client";
import { Tabs } from "~/src";

const TabsWithFullWidth = () => {
  return (
    <Tabs aria-label="Default tabs" style="fullWidth">
      <Tabs.Item title="Inbox" notification={20}>
        Inbox content
      </Tabs.Item>
      <Tabs.Item title="Notification" notification={99}>
        Notification content
      </Tabs.Item>
      <Tabs.Item title="Cart" notification={12}>
        Cart content
      </Tabs.Item>
      <Tabs.Item title="Message" notification="new">
        Message content
      </Tabs.Item>
    </Tabs>
  );
};

const TabsWithFullWidthCode = `
"use client";
import { Tabs } from "keep-react";

const TabsWithFullWidth = () => {
  return (
    <Tabs aria-label="Default tabs" style="fullWidth">
      <Tabs.Item title="Inbox" notification={20}>
        Inbox content
      </Tabs.Item>
      <Tabs.Item title="Notification" notification={99}>
        Notification content
      </Tabs.Item>
      <Tabs.Item title="Cart" notification={12}>
        Cart content
      </Tabs.Item>
      <Tabs.Item title="Message" notification="new">
        Message content
      </Tabs.Item>
    </Tabs>
  );
};

export default TabsWithFullWidth;
`;

export { TabsWithFullWidth, TabsWithFullWidthCode };
