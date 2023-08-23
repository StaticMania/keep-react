"use client";
import { Toggle } from "@/src/components/Switch";
import { useState } from "react";

const DefaultSwitch = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleChange = (action: boolean) => {
    setActive(action);
  };
  return <Toggle bgColor="primary" size="md" onChange={handleChange} />;
};

const DefaultSwitchCode = `
"use client";
import { Toggle } from "keep-design";
import { useState } from "react";

const DefaultSwitch = () => {
  const [active, setActive] = useState(false);
  const handleChange = (action) => {
    setActive(action);
  };
  return <Toggle bgColor="primary" size="md" onChange={handleChange} />;
};

export default DefaultSwitch;
`;

export { DefaultSwitch, DefaultSwitchCode };
