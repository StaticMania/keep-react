"use client";
import { CheckBox } from "@/src/components/CheckBox";

const CheckboxWithLevel = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex gap-2">
        <CheckBox
          size="md"
          id="#id2"
          name="countries"
          value="USA"
          label="Checkbox"
        />
      </div>
      <div className="flex gap-2">
        <CheckBox
          size="md"
          variant="withoutCheck"
          type="round"
          checked={true}
          label="Checkbox"
          id="five"
          name="countries"
          value="USA"
        />
      </div>
      <div className="flex gap-2">
        <CheckBox size="md" label="Checkbox" checked={true} />
      </div>
    </div>
  );
};

const CheckboxWithLevelCode = `
"use client";
import { CheckBox } from "keep-design";

const CheckboxWithLevel = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex gap-2">
        <CheckBox
          size="md"
          id="#id2"
          name="countries"
          value="USA"
          label="Checkbox"
        />
      </div>
      <div className="flex gap-2">
        <CheckBox
          size="md"
          variant="withoutCheck"
          type="round"
          checked={true}
          label="Checkbox"
          id="five"
          name="countries"
          value="USA"
        />
      </div>
      <div className="flex gap-2">
        <CheckBox size="md" label="Checkbox" checked={true} />
      </div>
    </div>
  );
};

export default CheckboxWithLevel;
`;

export { CheckboxWithLevel, CheckboxWithLevelCode };
