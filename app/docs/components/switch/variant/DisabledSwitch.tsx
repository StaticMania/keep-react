"use client";
import { Toggle } from "~/src";

const DisabledSwitch = () => {
  return (
    <Toggle bgColor="primary" label="Disabled" size="md" disabled={true} />
  );
};

const DisabledSwitchCode = `
"use client";
import { Toggle } from "keep-react";

const DisabledSwitch = () => {
  return (
    <Toggle bgColor="primary" label="Disabled" size="md" disabled={true} />
  );
};

export default DisabledSwitch;
`;

export { DisabledSwitch, DisabledSwitchCode };
