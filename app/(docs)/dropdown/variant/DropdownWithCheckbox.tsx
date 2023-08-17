"use client";

import { CheckBox } from "@/src/components/CheckBox";
import { Dropdown } from "@/src/components/Dropdown";

const DropdownWithCheckbox = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Dropdown Title"
            id="#id1"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Application Setting"
            id="#id2"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Your Profile"
            id="#id3"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Privacy & Policy"
            id="#id4"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithCheckboxCode = `
"use client";
import { CheckBox,Dropdown } from "keep-design";

const DropdownWithCheckbox = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Dropdown Title"
            id="#id1"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Application Setting"
            id="#id2"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Your Profile"
            id="#id3"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Privacy & Policy"
            id="#id4"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithCheckbox;
`;
export { DropdownWithCheckbox, DropdownWithCheckboxCode };
