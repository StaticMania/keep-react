"use client";
import { Toggle } from "@/src/components/Switch";
import { useState } from "react";

const SwitchWithIcon = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleChange = (action: boolean) => {
    setActive(action);
  };
  return (
    <Toggle
      bgColor="primary"
      label="Toggle"
      size="md"
      withIcon={true}
      onChange={handleChange}
    />
  );
};

const SwitchWithIconCode = `
"use client";
import { Toggle } from "keep-design";

const SwitchWithIcon = () => {
  const [active, setActive] = useState(false);
  const handleChange = (action) => {
    setActive(action);
  };
  return (
    <Toggle
      bgColor="primary"
      label="Toggle"
      size="md"
      withIcon={true}
      onChange={handleChange}
    />
  );
};

export default SwitchWithIcon;
`;
export { SwitchWithIcon, SwitchWithIconCode };
