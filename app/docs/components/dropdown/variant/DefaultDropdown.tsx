import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownDivider,
  DropdownItem,
} from '../../../../src'

const DefaultDropdown = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction asChild>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownArrow />
          <DropdownItem>Contacts</DropdownItem>
          <DropdownItem>Phone</DropdownItem>
          <DropdownItem>Statistics</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Rename</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Account</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

const DefaultDropdownCode = {
  'DropdownComponent.tsx': `
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownDivider,
  DropdownItem,
} from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownArrow />
        <DropdownItem>Contacts</DropdownItem>
        <DropdownItem>Phone</DropdownItem>
        <DropdownItem>Statistics</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Rename</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Account</DropdownItem>
        <DropdownItem>Logout</DropdownItem>
      </DropdownContent>
    </Dropdown>
  )
}
`,
}

export { DefaultDropdown, DefaultDropdownCode }
