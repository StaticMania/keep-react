'use client'
import { Button } from '../../../../src'

const DefaultButtonGroup = () => {
  return (
    <div className="h-20 p-4">
      <Button.Group>
        <Button position="start">Profile</Button>
        <Button position="center">Settings</Button>
        <Button position="end">Messages</Button>
      </Button.Group>
    </div>
  )
}

const DefaultButtonGroupCode = `
'use client'
import { Button } from 'keep-react'

export const ButtonGroupComponent = () => {
  return (
    <Button.Group>
        <Button position="start">Profile</Button>
        <Button position="center">Settings</Button>
        <Button position="end">Messages</Button>
    </Button.Group>
  );
};
`

export { DefaultButtonGroup, DefaultButtonGroupCode }
