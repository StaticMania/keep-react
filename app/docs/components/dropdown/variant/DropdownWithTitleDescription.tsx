"use client";
import { Dropdown } from "@/src/components";

const DropdownWithTitleDescription = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithTitleDescriptionCode = `
"use client";
import { Dropdown,TextInput } from "keep-react";
import { CaretRight } from "phosphor-react";

const DropdownWithTitleDescription = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithTitleDescription;
`;

export { DropdownWithTitleDescription, DropdownWithTitleDescriptionCode };
