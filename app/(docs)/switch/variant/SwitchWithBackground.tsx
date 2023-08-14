"use client";
import { Toggle } from "@/src/components/Switch";

const SwitchWithBackground = () => {
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Primary" size="md" />
      <Toggle bgColor="slate" label="Slate" size="md" />
    </div>
  );
};

const SwitchWithBackgroundCode = `
"use client";
import { Toggle } from "keep-design";

const SwitchWithBackground = () => {
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Primary" size="md" />
      <Toggle bgColor="slate" label="Slate" size="md" />
    </div>
  );
};

export default SwitchWithBackground;
`;
export { SwitchWithBackground, SwitchWithBackgroundCode };
