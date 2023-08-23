"use client";
import { CheckBox } from "@/src/components/CheckBox";

const CheckboxWithLevel = () => {
  return (
    <div className="flex flex-row gap-3">
      <CheckBox size="md" id="#id2" label="Checkbox" />
      <CheckBox size="md" id="#id3" label="Checkbox" checked={true} />
    </div>
  );
};

const CheckboxWithLevelCode = `
"use client";
import { CheckBox } from "keep-design";

const CheckboxWithLevel = () => {
  return (
    <div className="flex flex-row gap-3">
      <CheckBox size="md" id="#id2" label="Checkbox" />
      <CheckBox size="md" id="#id3" label="Checkbox" checked={true} />
    </div>
  );
};

export default CheckboxWithLevel;
`;

export { CheckboxWithLevel, CheckboxWithLevelCode };
