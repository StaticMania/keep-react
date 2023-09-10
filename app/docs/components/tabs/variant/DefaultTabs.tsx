"use client";
import { Tabs } from "~/src";

const DefaultTabs = () => {
  return (
    <Tabs aria-label="Default tabs" style="pills">
      <Tabs.Item active={true} title="Profile">
        Profile content
      </Tabs.Item>
      <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
      <Tabs.Item title="Settings">Settings content</Tabs.Item>
      <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
};

const DefaultTabsCode = `
"use client";
import { Tabs } from "keep-react";

const DefaultTabs = () => {
  return (
    <Tabs aria-label="Default tabs" style="pills">
      <Tabs.Item active={true} title="Profile">
        Profile content
      </Tabs.Item>
      <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
      <Tabs.Item title="Settings">Settings content</Tabs.Item>
      <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
};

export default DefaultTabs;
`;

export { DefaultTabs, DefaultTabsCode };
