"use client";

import { CheckBox } from "@/src/components/CheckBox";

const DefaultCheckbox = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex gap-2">
        <CheckBox
          size="md"
          label=""
          id="#id1"
          name="countries"
          value="USA"
          color="info"
        />
      </div>
      <div className="flex gap-2">
        <CheckBox
          size="md"
          variant="withoutCheck"
          type="circle"
          checked={true}
          label=""
          id="two"
          name="countries"
        />
      </div>
      <div className="flex gap-2">
        <CheckBox size="md" label="" checked={true} />
      </div>
    </div>
  );
};

const DefaultCheckboxCode = `
"use client";

import { CheckBox } from "keep-design";

const DefaultCheckbox = () => {
  return (
    <div>
      <CheckBox
        size="md"
        label=""
        id="#id1"
        name="countries"
        value="USA"
        color="info"
      />
      <CheckBox
        size="md"
        variant="withoutCheck"
        type="circle"
        checked={true}
        label=""
        id="two"
        name="countries"
      />
      <CheckBox size="md" label="" checked={true} />
    </div>
  );
};

export default DefaultCheckbox;
`;

export { DefaultCheckbox, DefaultCheckboxCode };
