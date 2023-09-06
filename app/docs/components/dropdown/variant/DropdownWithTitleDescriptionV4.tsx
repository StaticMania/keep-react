"use client";
import { Dropdown, TextInput } from "@/src/components";
import {
  CaretRight,
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const DropdownWithTitleDescriptionV4 = () => {
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
          <span>
            <GoogleLogo size={24} color="#4285f4" weight="bold" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <FacebookLogo size={24} color="#3b5998" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <TwitterLogo size={24} color="#00acee" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <YoutubeLogo size={24} color="#c4302b" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <LinkedinLogo size={24} color="#0072b1" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithTitleDescriptionV4Code = `
"use client";
import { Dropdown,TextInput } from "keep-react";
import {
  CaretRight,
  FacebookLogo,
  GoogleLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";

const DropdownWithTitleDescriptionV4 = () => {
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
          <span>
            <GoogleLogo size={24} color="#4285f4" weight="bold" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <FacebookLogo size={24} color="#3b5998" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <TwitterLogo size={24} color="#00acee" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <YoutubeLogo size={24} color="#c4302b" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-start gap-2">
          <span>
            <LinkedinLogo size={24} color="#0072b1" weight="fill" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="relative top-1 mb-2 text-base font-semibold leading-3 text-slate-700">
              Dropdown Title
            </p>
            <p className="max-w-xs text-sm font-normal text-slate-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <CaretRight size={20} color="#5E718D" />
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithTitleDescriptionV4;
`;
export { DropdownWithTitleDescriptionV4, DropdownWithTitleDescriptionV4Code };
