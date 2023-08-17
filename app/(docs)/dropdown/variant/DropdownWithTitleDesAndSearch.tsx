"use client";

import { Dropdown } from "@/src/components/Dropdown";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { CaretRight, Crown } from "phosphor-react";

const DropdownWithTitleDesAndSearch = () => {
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
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithTitleDesAndSearchCode = `
"use client";

import { Dropdown } from "@/src/components/Dropdown";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { CaretRight, Crown } from "phosphor-react";

const DropdownWithTitleDesAndSearch = () => {
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
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span className="py-1">
            <Crown size={24} color="#5E718D" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="-mb-0.5 text-base font-semibold text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="my-auto flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithTitleDesAndSearch;
`;

export { DropdownWithTitleDesAndSearch, DropdownWithTitleDesAndSearchCode };
