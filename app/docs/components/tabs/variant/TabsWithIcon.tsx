"use client";
import { Tabs } from "~/src";
import { Gear, GridFour, Phone, User, WarningCircle } from "phosphor-react";

const TabsWithIcon = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold text-slate-900">Left Side Icon Tabs</h1>
      <Tabs
        aria-label="Default tabs"
        style="underline"
        borderPosition="bottom"
        iconPosition="left"
      >
        <Tabs.Item title="Profile" icon={<User size={20} />}>
          Profile content
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={<GridFour size={20} />}>
          Dashboard content
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={<Gear size={20} />}>
          Settings content
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={<Phone size={20} />}>
          Contacts content
        </Tabs.Item>
        <Tabs.Item
          disabled={true}
          title="Disabled"
          icon={<WarningCircle size={20} />}
        >
          Disabled content
        </Tabs.Item>
      </Tabs>
      <h1 className="text-xl font-bold text-slate-900">Right Side Icon Tabs</h1>
      <Tabs
        aria-label="Default tabs"
        style="underline"
        borderPosition="bottom"
        iconPosition="right"
      >
        <Tabs.Item title="Profile" icon={<User size={20} />}>
          Profile content
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={<GridFour size={20} />}>
          Dashboard content
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={<Gear size={20} />}>
          Settings content
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={<Phone size={20} />}>
          Contacts content
        </Tabs.Item>
        <Tabs.Item
          disabled={true}
          title="Disabled"
          icon={<WarningCircle size={20} />}
        >
          Disabled content
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

const TabsWithIconCode = `
"use client";
import { Tabs } from "keep-react";
import { Gear, GridFour, Phone, User, WarningCircle } from "phosphor-react";

const TabsWithIcon = () => {
  return (
    <Tabs aria-label="Default tabs" style="underline" borderPosition="bottom" iconPosition="right">
      <Tabs.Item title="Profile" icon={<User size={20} />}>
        Profile content
      </Tabs.Item>
      <Tabs.Item title="Dashboard" icon={<GridFour size={20} />}>
        Dashboard content
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={<Gear size={20} />}>
        Settings content
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={<Phone size={20} />}>
        Contacts content
      </Tabs.Item>
      <Tabs.Item
        disabled={true}
        title="Disabled"
        icon={<WarningCircle size={20} />}
      >
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
};

export default TabsWithIcon;
`;

export { TabsWithIcon, TabsWithIconCode };
