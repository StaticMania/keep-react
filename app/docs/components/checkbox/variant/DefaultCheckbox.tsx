"use client";
import { CheckBox } from "@/src/components";

const DefaultCheckbox = () => {
  return (
    <div className="flex flex-row gap-3">
      <CheckBox size="md" label="" checked={false} />
      <CheckBox size="md" label="" checked={true} />
    </div>
  );
};

const DefaultCheckboxCode = `
"use client";
import { CheckBox } from "keep-react";

const DefaultCheckbox = () => {
  return (
    <div className="flex flex-row gap-3">
      <CheckBox size="md" label="" checked={false} />
      <CheckBox size="md" label="" checked={true} />
    </div>
  );
};


export default DefaultCheckbox;
`;

export { DefaultCheckbox, DefaultCheckboxCode };
