"use client";
import { Tabs } from "@/src/components";

const BorderedTabs = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* === BORDER TOP TABS === */}
      <h1 className="text-xl font-bold text-slate-900">Border Top Tabs</h1>
      <Tabs aria-label="Default tabs" style="underline" borderPosition="top">
        <Tabs.Item title="Profile">Profile content</Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
      {/* === BORDER BOTTOM TABS === */}
      <h1 className="text-xl font-bold text-slate-900">Border Bottom Tabs</h1>
      <Tabs aria-label="Default tabs" style="underline" borderPosition="bottom">
        <Tabs.Item title="Profile">Profile content</Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

const BorderedTabsCode = `
"use client";
import { Tabs } from "keep-react";

const BorderedTabs = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* === BORDER TOP TABS === */}
      <h1 className="text-xl font-bold text-slate-900">Border Top Tabs</h1>
      <Tabs aria-label="Default tabs" style="underline" borderPosition="top">
        <Tabs.Item title="Profile">Profile content</Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
      {/* === BORDER BOTTOM TABS === */}
      <h1 className="text-xl font-bold text-slate-900">Border Bottom Tabs</h1>
      <Tabs aria-label="Default tabs" style="underline" borderPosition="bottom">
        <Tabs.Item title="Profile">Profile content</Tabs.Item>
        <Tabs.Item title="Dashboard">Dashboard content</Tabs.Item>
        <Tabs.Item title="Settings">Settings content</Tabs.Item>
        <Tabs.Item title="Contacts">Contacts content</Tabs.Item>
        <Tabs.Item disabled={true} title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default BorderedTabs;
`;

export { BorderedTabs, BorderedTabsCode };
