'use client'
import { Gear, Globe, SignOut, Users } from 'phosphor-react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownSub,
  DropdownSubAction,
  DropdownSubContent,
} from '../../../../src'

const DropdownWithSubmenu = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction asChild>
          <Button>Open Dropdown</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownArrow />
          <DropdownGroup>
            <DropdownItem>
              <Users size={20} />
              Profile
            </DropdownItem>

            <DropdownSub>
              <DropdownSubAction>
                <p className="flex items-center gap-2 text-body-4 font-medium ">
                  <Globe size={20} />
                  Language
                </p>
              </DropdownSubAction>
              <DropdownSubContent>
                <DropdownItem>Bangla</DropdownItem>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Spanish</DropdownItem>
                <DropdownItem>French</DropdownItem>
              </DropdownSubContent>
            </DropdownSub>
            <DropdownItem>
              <Gear size={20} />
              Settings
            </DropdownItem>
            <DropdownItem>
              <SignOut size={20} />
              Logout
            </DropdownItem>
          </DropdownGroup>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

const DropdownWithSubmenuCode = {
  'DropdownComponent.tsx': `
'use client'
import { Gear, Globe, SignOut, Users } from 'phosphor-react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownSub,
  DropdownSubAction,
  DropdownSubContent,
} from 'keep-react'

export const DropdownComponent = () => {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button>Open Dropdown</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownArrow />
        <DropdownGroup>
          <DropdownItem>
            <Users size={20} />
            Profile
          </DropdownItem>
          <DropdownSub>
            <DropdownSubAction>
              <p className="flex items-center gap-2 text-body-4 font-medium ">
                <Globe size={20} />
                Language
              </p>
            </DropdownSubAction>
            <DropdownSubContent>
              <DropdownItem>Bangla</DropdownItem>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Spanish</DropdownItem>
              <DropdownItem>French</DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
          <DropdownItem>
            <Gear size={20} />
            Settings
          </DropdownItem>
          <DropdownItem>
            <SignOut size={20} />
            Logout
          </DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  )
}
`,
}

export { DropdownWithSubmenu, DropdownWithSubmenuCode }
