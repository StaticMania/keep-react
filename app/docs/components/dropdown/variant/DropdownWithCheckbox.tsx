'use client'
import { useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownCheckboxItem,
  DropdownCheckboxItemProps,
  DropdownContent,
  DropdownLabel,
} from '../../../../src'

type Checked = DropdownCheckboxItemProps['checked']

const DropdownWithCheckbox = () => {
  const [selectReact, setSelectReact] = useState<Checked>(true)
  const [selectVue, setSelectVue] = useState<Checked>(false)
  const [selectAngular, setSelectAngular] = useState<Checked>(false)

  return (
    <div className="flex items-center justify-center px-5 py-3">
      <Dropdown>
        <DropdownAction asChild>
          <Button>Select a framework</Button>
        </DropdownAction>
        <DropdownContent>
          <DropdownLabel>Select a framework</DropdownLabel>
          <DropdownArrow />
          <DropdownCheckboxItem checked={selectReact} onCheckedChange={setSelectReact}>
            ReactJS
          </DropdownCheckboxItem>
          <DropdownCheckboxItem checked={selectVue} onCheckedChange={setSelectVue}>
            VueJS
          </DropdownCheckboxItem>
          <DropdownCheckboxItem checked={selectAngular} onCheckedChange={setSelectAngular}>
            AngularJS
          </DropdownCheckboxItem>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}

const DropdownWithCheckboxCode = {
  'DropdownComponent.tsx': `
'use client'
import { useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownCheckboxItem,
  DropdownCheckboxItemProps,
  DropdownContent,
  DropdownLabel,
} from 'keep-react'

type Checked = DropdownCheckboxItemProps['checked']

const DropdownWithCheckbox = () => {
  const [selectReact, setSelectReact] = useState<Checked>(true)
  const [selectVue, setSelectVue] = useState<Checked>(false)
  const [selectAngular, setSelectAngular] = useState<Checked>(false)

  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button>Select a framework</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownLabel>Select a framework</DropdownLabel>
        <DropdownArrow />
        <DropdownCheckboxItem checked={selectReact} onCheckedChange={setSelectReact}>
          ReactJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={selectVue} onCheckedChange={setSelectVue}>
          VueJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={selectAngular} onCheckedChange={setSelectAngular}>
          AngularJS
        </DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>
  )
}
`,
  'DropdownComponent.jsx': `
'use client'
import { useState } from 'react'
import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownCheckboxItem,
  DropdownCheckboxItemProps,
  DropdownContent,
  DropdownLabel,
} from 'keep-react'

const DropdownWithCheckbox = () => {
  const [selectReact, setSelectReact] = useState(true)
  const [selectVue, setSelectVue] = useState(false)
  const [selectAngular, setSelectAngular] = useState(false)

  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button>Select a framework</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownLabel>Select a framework</DropdownLabel>
        <DropdownArrow />
        <DropdownCheckboxItem checked={selectReact} onCheckedChange={setSelectReact}>
          ReactJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={selectVue} onCheckedChange={setSelectVue}>
          VueJS
        </DropdownCheckboxItem>
        <DropdownCheckboxItem checked={selectAngular} onCheckedChange={setSelectAngular}>
          AngularJS
        </DropdownCheckboxItem>
      </DropdownContent>
    </Dropdown>
  )
}
`,
}

export { DropdownWithCheckbox, DropdownWithCheckboxCode }
