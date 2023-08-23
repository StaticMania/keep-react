"use client";
import { Toggle } from "@/src/components/Switch";
import { useState } from "react";

const SwitchSizes = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleChange = (action: boolean) => {
    setActive(action);
  };
  return (
    <div className="flex gap-5">
      <Toggle
        bgColor="primary"
        label="Small"
        size="sm"
        onChange={handleChange}
      />
      <Toggle
        bgColor="primary"
        label="Medium"
        size="md"
        onChange={handleChange}
      />
      <Toggle
        bgColor="primary"
        label="Large"
        size="lg"
        onChange={handleChange}
      />
    </div>
  );
};

const SwitchSizesCode = `
"use client";
import { useState } from "react";
import { Toggle } from "keep-design";

const SwitchSizes = () => {
  const [active, setActive] = useState(false);
  const handleChange = (action) => {
    setActive(action);
  };
  return (
    <div className="flex gap-5">
      <Toggle
        bgColor="primary"
        label="Small"
        size="sm"
        onChange={handleChange}
      />
      <Toggle
        bgColor="primary"
        label="Medium"
        size="md"
        onChange={handleChange}
      />
      <Toggle
        bgColor="primary"
        label="Large"
        size="lg"
        onChange={handleChange}
      />
    </div>
  );
};

export default SwitchSizes;

`;

export { SwitchSizes, SwitchSizesCode };
