"use client";
import { CheckBox, TextInput, Dropdown } from "~/src";
import { CaretRight } from "phosphor-react";

const DropdownWithCheckboxV3 = () => {
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
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdy312"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdy312" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdyee"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdyee" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdyxs"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdyxs" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdyfr"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdyfr" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithCheckboxV3Code = `
"use client";
import { CheckBox,Dropdown,TextInput } from "keep-react";
import { CaretRight } from "phosphor-react";

const DropdownWithCheckboxV3 = () => {
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
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdy312"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdy312" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdyee"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdyee" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdyxs"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdyxs" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="flex !items-start gap-2">
        <div>
          <CheckBox
            size="sm"
            label=""
            id="#id-z3rxdyfr"
            name="countries"
            value="USA"
            color="gray"
          />
        </div>
        <label htmlFor="#id-z3rxdyfr" className="cursor-pointer select-none">
          <p className="mb-2 text-base font-semibold leading-3 text-slate-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-sm font-normal text-slate-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </label>
        <div>
          <CaretRight size={20} color="#5E718D" />
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithCheckboxV3;

`;

export { DropdownWithCheckboxV3, DropdownWithCheckboxV3Code };
