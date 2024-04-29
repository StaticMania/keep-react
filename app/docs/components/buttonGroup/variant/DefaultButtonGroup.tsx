import { Button, ButtonGroup } from '../../../../src'

const DefaultButtonGroup = () => {
  return (
    <div className="h-20 p-4">
      <ButtonGroup>
        <Button position="start">Profile</Button>
        <Button position="center">Settings</Button>
        <Button position="end">Messages</Button>
      </ButtonGroup>
    </div>
  )
}

const DefaultButtonGroupCode = `
import { Button, ButtonGroup } from 'keep-react'

export const ButtonGroupComponent = () => {
  return (
    <ButtonGroup>
      <Button position="start">Profile</Button>
      <Button position="center">Settings</Button>
      <Button position="end">Messages</Button>
    </ButtonGroup>
  )
}
`

export { DefaultButtonGroup, DefaultButtonGroupCode }
