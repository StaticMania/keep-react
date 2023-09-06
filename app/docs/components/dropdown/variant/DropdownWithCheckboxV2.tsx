"use client";
import { CaretRight } from "phosphor-react";
import { CheckBox, Dropdown, TextInput } from "@/src/components";

const DropdownWithCheckboxV2 = () => {
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
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Dropdown Title"
            id="#id211"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Application Setting"
            id="#i12d2"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Your Profile"
            id="12#id3"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Privacy & Policy"
            id="1#1id4"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithCheckboxV2Code = `
"use client";
import { CaretRight } from "phosphor-react";
import { CheckBox,TextInput,Dropdown } from "keep-react";

const DropdownWithCheckboxV2 = () => {
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
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Dropdown Title"
            id="#id211"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Application Setting"
            id="#i12d2"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Your Profile"
            id="12#id3"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
      <Dropdown.Item className="gap-5">
        <div className="flex items-center">
          <CheckBox
            size="sm"
            label="Privacy & Policy"
            id="1#1id4"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <span className="ml-auto">
          <CaretRight size={20} color="#5E718D" />
        </span>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithCheckboxV2;

`;

export { DropdownWithCheckboxV2, DropdownWithCheckboxV2Code };
