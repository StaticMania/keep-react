import { Button, ButtonGroup } from '../../../../src'

const DefaultButtonGroup = () => {
  return (
    <div className="flex items-center justify-center px-5 py-3">
      <ButtonGroup>
        <Button position="start">Profile</Button>
        <Button position="center">Settings</Button>
        <Button position="end">Messages</Button>
      </ButtonGroup>
    </div>
  )
}

const DefaultButtonGroupCode = {
  'ButtonGroupComponent.tsx': `
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
`,
}

export { DefaultButtonGroup, DefaultButtonGroupCode }
