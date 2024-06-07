import { Button, Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from '../../../../src'

const DefaultDropdown = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button color="secondary" size="xs">
          Dropdown
        </Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
          <DropdownItem>Contacts</DropdownItem>
          <DropdownItem>Phone</DropdownItem>
          <DropdownItem>Statistics</DropdownItem>
          <Divider />
          <DropdownItem>Rename</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <Divider />
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  )
}

const DefaultDropdownCode = `
import { Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList, Button }  from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button color="secondary" size="xs">
          Dropdown
        </Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownList>
          <DropdownItem>Contacts</DropdownItem>
          <DropdownItem>Phone</DropdownItem>
          <DropdownItem>Statistics</DropdownItem>
          <Divider />
          <DropdownItem>Rename</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <Divider />
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  )
}


`

export { DefaultDropdown, DefaultDropdownCode }
