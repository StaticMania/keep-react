"use client";
import { Dropdown } from "@/src/components/Dropdown";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { CaretRight, Gear, Money, SignOut, SquaresFour } from "phosphor-react";

const DropdownWithIconAndSearchBar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <div className="px-5 pt-3 pb-2">
        <TextInput id="#id-8yj95h" placeholder="Search" color="gray" />
      </div>
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
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithIconAndSearchBarCode = `
"use client";
import { Dropdown,TextInput } from "keep-design";
import { CaretRight, Gear, Money, SignOut, SquaresFour } from "phosphor-react";

const DropdownWithIconAndSearchBar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <div className="px-5 pt-3 pb-2">
        <TextInput id="#id-8yj95h" placeholder="Search" color="gray" />
      </div>
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
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithIconAndSearchBar;


`;

export { DropdownWithIconAndSearchBar, DropdownWithIconAndSearchBarCode };
