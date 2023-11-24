'use client'
import { Dropdown } from '~/src'

const DefaultDropdown = () => {
  return (
    <Dropdown label="Dropdown button" size="sm" variant="primary" dismissOnClick={true}>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  )
}

const DefaultDropdownCode = `
"use client";
import { Dropdown } from "keep-react";

export const DropdownComponent = () => {
  return (
    <Dropdown
      label="Dropdown button"
      size="sm"
      type="primary"
      dismissOnClick={true}
    >
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
`

export { DefaultDropdown, DefaultDropdownCode }
