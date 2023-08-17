"use client";

import { Avatar } from "@/src/components/Avatar/Avatar";
import { Dropdown } from "@/src/components/Dropdown";
import { TextInput } from "@/src/components/FormControls/TextInput";
import { CaretRight } from "phosphor-react";

const DropdownWithAvatarV2 = () => {
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
        <div className="flex w-full items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-2.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Guy Hawkins
              </p>
              <p className="text-xs font-normal text-slate-500">
                Product Designer
              </p>
            </div>
          </div>
          <span>
            <CaretRight size={18} color="#5E718D" />
          </span>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-1.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Bellanca Sherringham
              </p>
              <p className="text-xs font-normal text-slate-500">
                VP Accounting
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-3.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Carlin Tebb
              </p>
              <p className="text-xs font-normal text-slate-500">
                Clinical Specialist
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-4.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Lorena Gregg
              </p>
              <p className="text-xs font-normal text-slate-500">
                Research Nurse
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-5.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Geoffry Kingman
              </p>
              <p className="text-xs font-normal text-slate-500">
                Speech Pathologist
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithAvatarV2Code = `
"use client";
import { Avatar,Dropdown,TextInput } from "keep-design";
import { CaretRight } from "phosphor-react";

const DropdownWithAvatarV2 = () => {
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
        <div className="flex w-full items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-2.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Guy Hawkins
              </p>
              <p className="text-xs font-normal text-slate-500">
                Product Designer
              </p>
            </div>
          </div>
          <span>
            <CaretRight size={18} color="#5E718D" />
          </span>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-1.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Bellanca Sherringham
              </p>
              <p className="text-xs font-normal text-slate-500">
                VP Accounting
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-3.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Carlin Tebb
              </p>
              <p className="text-xs font-normal text-slate-500">
                Clinical Specialist
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-4.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Lorena Gregg
              </p>
              <p className="text-xs font-normal text-slate-500">
                Research Nurse
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex w-full items-center justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <Avatar shape="round" img="/images/avatar/avatar-5.png" size="md" />
            <div>
              <p className="-mb-1 text-sm font-medium text-slate-700">
                Geoffry Kingman
              </p>
              <p className="text-xs font-normal text-slate-500">
                Speech Pathologist
              </p>
            </div>
          </div>
          <div className="justify-self-end">
            <CaretRight size={18} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithAvatarV2;
`;

export { DropdownWithAvatarV2, DropdownWithAvatarV2Code };
