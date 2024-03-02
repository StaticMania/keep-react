'use client'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'
import { Button } from '../../../../src'

const ButtonGroupWithIcon = () => {
  return (
    <div className="h-20 p-4">
      <Button.Group>
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
      </Button.Group>
    </div>
  )
}

const ButtonGroupWithIconCode = `
'use client'
import { Button } from 'keep-react'
import { ChatCircleDots, Cube, Gear } from 'phosphor-react'

export const ButtonGroupComponent = () => {
  return (
    <Button.Group>
      <Button  position="start">
        <span className="pr-2">
          <Cube size={24} />
        </span>
        Profile
      </Button>
      <Button  position="middle">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button  position="end">
        <span className="pr-2">
          <ChatCircleDots size={24} />
        </span>
        Messages
      </Button>
    </Button.Group>
  );
};
`

export { ButtonGroupWithIcon, ButtonGroupWithIconCode }
