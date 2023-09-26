"use client";
import { CheckBox } from "~/src";

const DefaultCheckbox = () => {
  return (
    <div className="flex flex-row gap-3">
      {/* <CheckBox
        size="md"
        variant="withoutCheck"
        type="circle"
        checked={true}
        label=""
        id="two"
        name="countries"
      />
      <CheckBox
        size="md"
        variant="withoutCheck"
        type="round"
        checked={true}
        label=""
        id="five"
        name="countries"
        value="USA"
      /> */}
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
