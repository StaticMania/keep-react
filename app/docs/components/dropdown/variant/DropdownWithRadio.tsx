'use client'
import { useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
} from '../../../../src'

const DropdownWithRadio = () => {
  const [role, setRole] = useState('Software Developer')

  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction asChild>
          <Button>Choose a role</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownLabel>Select a role</DropdownLabel>
          <DropdownArrow />
          <DropdownRadioGroup value={role} onValueChange={setRole}>
            <DropdownRadioItem value="Software Developer">Software Developer</DropdownRadioItem>
            <DropdownRadioItem value="ML Engineer">ML Engineer</DropdownRadioItem>
            <DropdownRadioItem value="Data Scientist">Data Scientist</DropdownRadioItem>
            <DropdownRadioItem value="Product Manager">Product Manager</DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

const DropdownWithRadioCode = {
  'DropdownComponent.tsx': `
'use client'
import { useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
} from 'keep-react'

const DropdownWithRadio = () => {
  const [role, setRole] = useState('Software Developer')

  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button>Choose a role</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownLabel>Select a role</DropdownLabel>
        <DropdownArrow />
        <DropdownRadioGroup value={role} onValueChange={setRole}>
          <DropdownRadioItem value="Software Developer">Software Developer</DropdownRadioItem>
          <DropdownRadioItem value="ML Engineer">ML Engineer</DropdownRadioItem>
          <DropdownRadioItem value="Data Scientist">Data Scientist</DropdownRadioItem>
          <DropdownRadioItem value="Product Manager">Product Manager</DropdownRadioItem>
        </DropdownRadioGroup>
      </DropdownContent>
    </Dropdown>
  )
}
`,
}

export { DropdownWithRadio, DropdownWithRadioCode }
