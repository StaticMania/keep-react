'use client'
import { Dropdown } from '../../../../src'

const DropdownWithTitleDescription = () => {
  return (
    <Dropdown label="Dropdown button" type="primary" size="sm" dismissOnClick={true}>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">Dropdown Title</p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">Dropdown Title</p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">Dropdown Title</p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">Dropdown Title</p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  )
}

const DropdownWithTitleDescriptionCode = `
"use client";
import { CaretRight } from "phosphor-react";
import { Dropdown,TextInput } from "keep-react";

export const DropdownComponent = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex flex-col items-start gap-1">
          <p className="text-body-4 font-semibold text-metal-700">
            Dropdown Title
          </p>
          <p className="max-w-xs text-body-5 font-normal text-metal-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
}
`

export { DropdownWithTitleDescription, DropdownWithTitleDescriptionCode }
