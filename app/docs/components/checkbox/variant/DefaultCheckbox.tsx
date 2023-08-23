"use client";

import { CheckBox } from "@/src/components/CheckBox";

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
import { CheckBox } from "keep-design";

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
