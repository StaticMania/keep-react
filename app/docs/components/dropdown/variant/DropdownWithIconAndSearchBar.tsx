'use client'
import { Dropdown, TextInput } from '../../../../src'
import { CaretRight, Gear, Money, SignOut, SquaresFour } from 'phosphor-react'

const DropdownWithIconAndSearchBar = () => {
  return (
    <Dropdown label="Dropdown button" size="sm" dismissOnClick={true}>
      <div className="px-5 pb-2 pt-3">
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
      <Dropdown.Item icon={<SignOut size={20} color="#5E718D" />}>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

const DropdownWithIconAndSearchBarCode = `
"use client";
import { Dropdown,TextInput } from "keep-react";
import { CaretRight, Gear, Money, SignOut, SquaresFour } from "phosphor-react";

export const DropdownComponent = () => {
  return (
    <Dropdown
      label="Dropdown button"
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
}
`

export { DropdownWithIconAndSearchBar, DropdownWithIconAndSearchBarCode }
