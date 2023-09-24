"use client";
import { Tabs } from "~/src";

const BorderedTabs = () => {
  return (
    <Tabs aria-label="Default tabs" style="underline" borderPosition="bottom">
      <Tabs.Item title="Profile">Profile content</Tabs.Item>
      <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
      <Tabs.Item title="Settings">Settings content</Tabs.Item>
      <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
};

const BorderedTabsCode = `
"use client";
import { Tabs } from "keep-react";

const BorderedTabs = () => {
  return (
    <Tabs aria-label="Default tabs" style="underline" borderPosition="bottom">
      <Tabs.Item title="Profile">Profile content</Tabs.Item>
      <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
      <Tabs.Item title="Settings">Settings content</Tabs.Item>
      <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
      <Tabs.Item disabled={true} title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
};

export default BorderedTabs;
`;

export { BorderedTabs, BorderedTabsCode };
