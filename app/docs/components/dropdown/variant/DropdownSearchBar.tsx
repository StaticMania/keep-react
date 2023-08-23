"use client";
import { Dropdown } from "@/src/components/Dropdown";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { CaretRight } from "phosphor-react";

const DropdownSearchBar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <div className="px-5 pt-3 pb-2">
        <TextInput
          id="#id-z3rxdy"
          placeholder="Search"
          color="gray"
          sizing="md"
        />
      </div>
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

const DropdownSearchBarCode = `
"use client";
import { Dropdown,TextInput } from "keep-design";
import { CaretRight } from "phosphor-react";

const DropdownSearchBar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <div className="px-5 pt-3 pb-2">
        <TextInput
          id="#id-z3rxdy"
          placeholder="Search"
          color="gray"
          sizing="md"
        />
      </div>
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

export default DropdownSearchBar;
`;

export { DropdownSearchBar, DropdownSearchBarCode };
