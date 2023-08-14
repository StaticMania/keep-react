"use client";
import { Toggle } from "@/src/components/Switch";

const DefaultSwitch = () => {
  return <Toggle bgColor="primary" size="md" />;
};

const DefaultSwitchCode = `
"use client";
import { Toggle } from "keep-design";

const DefaultSwitch = () => {
  return <Toggle bgColor="primary" size="md" />;
};

export default DefaultSwitch;
`;

export { DefaultSwitch, DefaultSwitchCode };
