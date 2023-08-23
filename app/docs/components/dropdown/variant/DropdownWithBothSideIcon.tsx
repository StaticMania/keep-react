"use client";
import { Dropdown } from "@/src/components/Dropdown";
import { CaretRight, Gear, Money, SignOut, SquaresFour } from "phosphor-react";

const DropdownWithBothSideIcon = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
        Dashboard
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
        Settings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<Money size={20} color="#5E718D" />}>
        Earnings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
        Sign out
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithBothSideIconCode = `
"use client";
import { Dropdown } from "keep-design";
import { CaretRight, Gear, Money, SignOut, SquaresFour } from "phosphor-react";

const DropdownWithBothSideIcon = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item icon={<SquaresFour size={20} color="#5E718D" />}>
        Dashboard
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<Gear size={20} color="#5E718D" />}>
        Settings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<Money size={20} color="#5E718D" />}>
        Earnings
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>
        Sign out
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithBothSideIcon;
`;

export { DropdownWithBothSideIcon, DropdownWithBothSideIconCode };
