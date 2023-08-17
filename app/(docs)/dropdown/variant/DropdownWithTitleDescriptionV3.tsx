"use client";

import { Dropdown } from "@/src/components/Dropdown";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { CaretRight } from "phosphor-react";

const DropdownWithTitleDescriptionV3 = () => {
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
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithTitleDescriptionV3Code = `
"use client";
import { Dropdown,TextInput } from "keep-design";
import { CaretRight } from "phosphor-react";

const DropdownWithTitleDescriptionV3 = () => {
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
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div className="flex flex-col items-start gap-1">
          <p className="text-base font-semibold text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithTitleDescriptionV3;
`;

export { DropdownWithTitleDescriptionV3, DropdownWithTitleDescriptionV3Code };
