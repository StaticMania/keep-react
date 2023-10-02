"use client";
import { CheckBox } from "~/src";

const DefaultCheckbox = () => {
  const handleChecked = (value: boolean) => {
    console.log(value);
  };
  return (
    <div className="flex flex-row gap-3">
      <CheckBox
        size="md"
        variant="square"
        label="Checkbox"
        id="two"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </div>
  );
};

const DefaultCheckboxCode = `
"use client";
import { CheckBox } from "keep-react";

const DefaultCheckbox = () => {
  const handleChecked = (value) => {
    console.log(value);
  };
  return (
    <div className="flex flex-row gap-3">
      <CheckBox
        size="md"
        variant="square"
        label="Checkbox"
        id="two"
        name="countries"
        color="info"
        handleChecked={handleChecked}
      />
    </div>
  );
};

export default DefaultCheckbox;
`;

export { DefaultCheckbox, DefaultCheckboxCode };
