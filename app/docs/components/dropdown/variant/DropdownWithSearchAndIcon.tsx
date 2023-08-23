import { Dropdown } from "@/src/components/Dropdown";
import { CaretRight } from "phosphor-react";
import React from "react";

const DropdownWithSearchAndIcon = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <div className="px-5 pt-3 pb-2">
        <input id="#id-z3rxdy" placeholder="Search" color="gray" />
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

export default DropdownWithSearchAndIcon;
