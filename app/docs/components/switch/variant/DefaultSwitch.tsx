"use client";
import { Toggle } from "~/src";

const DefaultSwitch = () => {
  return <Toggle bgColor="primary" size="md" />;
};

const DefaultSwitchCode = `
"use client";
import { Toggle } from "keep-react";

export const SwitchComponent = () => {
  return <Toggle bgColor="primary" size="md" />;
}
`;

export { DefaultSwitch, DefaultSwitchCode };
