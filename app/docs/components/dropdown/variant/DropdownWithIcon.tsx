"use client";
import { Dropdown } from "@/src/components/Dropdown";
import { CaretRight } from "phosphor-react";

const DropdownWithIcon = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        Dashboard
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item>
        Sign out
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithIconCode = `
"use client";
import { Dropdown } from "keep-design";
import { CaretRight } from "phosphor-react";

const DropdownWithIcon = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        Dashboard
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item>
        Settings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item>
        Earnings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item>
        Sign out
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithIcon;
`;

export { DropdownWithIcon, DropdownWithIconCode };
