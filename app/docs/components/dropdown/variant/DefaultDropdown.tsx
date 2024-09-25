import { Button, Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList } from '../../../../src'

const DefaultDropdown = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Dropdown showArrow>
        <DropdownAction asChild>
          <Button>Open Dropdown</Button>
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
    </div>
  )
}

const DefaultDropdownCode = {
  'DropdownComponent.tsx': `
import { Button, Divider, Dropdown, DropdownAction, DropdownContent, DropdownItem, DropdownList }  from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
         <Button>Open Dropdown</Button>
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
`,
}

export { DefaultDropdown, DefaultDropdownCode }
