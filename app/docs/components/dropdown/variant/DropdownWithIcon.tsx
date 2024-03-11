'use client'
import { ChartPieSlice, Copy, Pen, Phone, SignOut, UserCircle, Users } from 'phosphor-react'
import { Divider, Dropdown } from '../../../../src'

const DropdownWithIcon = () => {
  return (
    <Dropdown>
      <Dropdown.List>
        <Dropdown.Item>
          <Users size={24} />
          Contacts
        </Dropdown.Item>
        <Dropdown.Item>
          <Phone size={24} />
          Phone
        </Dropdown.Item>
        <Dropdown.Item>
          <ChartPieSlice size={24} />
          Statistics
        </Dropdown.Item>
        <Divider />
        <Dropdown.Item>
          <Pen size={24} />
          Rename
        </Dropdown.Item>
        <Dropdown.Item>
          <Copy size={24} />
          Duplicate
        </Dropdown.Item>
        <Divider />
        <Dropdown.Item>
          <UserCircle size={24} />
          Account
        </Dropdown.Item>
        <Dropdown.Item>
          <SignOut size={24} />
          Logout
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  )
}

const DropdownWithIconCode = `
'use client'
import { ChartPieSlice, Copy, Pen, Phone, SignOut, UserCircle, Users } from 'phosphor-react'
import { Divider, Dropdown } from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <Dropdown.List>
        <Dropdown.Item>
          <Users size={24} />
          Contacts
        </Dropdown.Item>
        <Dropdown.Item>
          <Phone size={24} />
          Phone
        </Dropdown.Item>
        <Dropdown.Item>
          <ChartPieSlice size={24} />
          Statistics
        </Dropdown.Item>
        <Divider />
        <Dropdown.Item>
          <Pen size={24} />
          Rename
        </Dropdown.Item>
        <Dropdown.Item>
          <Copy size={24} />
          Duplicate
        </Dropdown.Item>
        <Divider />
        <Dropdown.Item>
          <UserCircle size={24} />
          Account
        </Dropdown.Item>
        <Dropdown.Item>
          <SignOut size={24} />
          Logout
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  )
}
`

export { DropdownWithIcon, DropdownWithIconCode }
