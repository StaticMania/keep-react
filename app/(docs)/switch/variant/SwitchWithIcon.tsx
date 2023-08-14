"use client";
import { Toggle } from "@/src/components/Switch";

const SwitchWithIcon = () => {
  return <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} />;
};

const SwitchWithIconCode = `
"use client";
import { Toggle } from "keep-design";

const SwitchWithIcon = () => {
  return <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} />;
};

export default SwitchWithIcon;
`;
export { SwitchWithIcon, SwitchWithIconCode };
