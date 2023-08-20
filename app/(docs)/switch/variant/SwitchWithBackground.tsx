"use client";
import { Toggle } from "@/src/components/Switch";
import { useState } from "react";

const SwitchWithBackground = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleChange = (action: boolean) => {
    setActive(action);
  };
  return (
    <div className="flex gap-5">
      <Toggle
        bgColor="primary"
        label="Primary"
        size="md"
        onChange={handleChange}
      />
      <Toggle bgColor="slate" label="Slate" size="md" onChange={handleChange} />
    </div>
  );
};
const SwitchWithBackgroundCode = `
"use client";
import { Toggle } from "keep-design";
import { useState } from "react";

const SwitchWithBackground = () => {
  const [active, setActive] = useState(false);
  const handleChange = (action) => {
    setActive(action);
  };
  return (
    <div className="flex gap-5">
      <Toggle
        bgColor="primary"
        label="Primary"
        size="md"
        onChange={handleChange}
      />
      <Toggle bgColor="slate" label="Slate" size="md" onChange={handleChange} />
    </div>
  );
};

export default SwitchWithBackground;
`;
export { SwitchWithBackground, SwitchWithBackgroundCode };
