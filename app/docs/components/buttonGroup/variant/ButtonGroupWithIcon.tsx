'use client'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'
import { Button, ButtonGroup } from '../../../../src'

const ButtonGroupWithIcon = () => {
  return (
    <div className="h-20 p-4">
      <ButtonGroup>
        <Button position="start">
          <Cube size={20} className="mr-1.5" />
          Profile
        </Button>
        <Button position="center">
          <Gear size={20} className="mr-1.5" />
          Settings
        </Button>
        <Button position="end">
          <ChatCircleDots size={24} className="mr-1.5" />
          Messages
        </Button>
      </ButtonGroup>
    </div>
  )
}

const ButtonGroupWithIconCode = {
  'ButtonGroupComponent.tsx': `
'use client'
import { Button, ButtonGroup } from 'keep-react'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'

export const ButtonGroupComponent = () => {
  return (
    <ButtonGroup>
      <Button position="start">
        <span className="pr-2">
          <Cube size={24} />
        </span>
        Profile
      </Button>
      <Button position="center">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button position="end">
        <span className="pr-2">
          <ChatCircleDots size={24} />
        </span>
        Messages
      </Button>
    </ButtonGroup>
  )
}
`,
}

export { ButtonGroupWithIcon, ButtonGroupWithIconCode }
