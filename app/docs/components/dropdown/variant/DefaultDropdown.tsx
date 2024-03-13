'use client'
import { Divider, Dropdown } from '../../../../src'

const DefaultDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.List>
        <Dropdown.Item>Contacts</Dropdown.Item>
        <Dropdown.Item>Phone</Dropdown.Item>
        <Dropdown.Item>Statistics</Dropdown.Item>
        <Divider />
        <Dropdown.Item>Rename</Dropdown.Item>
        <Dropdown.Item>Duplicate</Dropdown.Item>
        <Divider />
        <Dropdown.Item>Account</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  )
}

const DefaultDropdownCode = `
'use client'
import { Divider, Dropdown } from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <Dropdown.List>
        <Dropdown.Item>Contacts</Dropdown.Item>
        <Dropdown.Item>Phone</Dropdown.Item>
        <Dropdown.Item>Statistics</Dropdown.Item>
        <Divider />
        <Dropdown.Item>Rename</Dropdown.Item>
        <Dropdown.Item>Duplicate</Dropdown.Item>
        <Divider />
        <Dropdown.Item>Account</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  )
}
`

export { DefaultDropdown, DefaultDropdownCode }
