import { Toggle } from '../../../../src'

const DisabledSwitch = () => {
  return <Toggle bgColor="primary" label="Disabled" size="md" disabled={true} />
}

const DisabledSwitchCode = `
import { Toggle } from 'keep-react'

export const SwitchComponent = () => {
  return (
    <Toggle bgColor="primary" label="Disabled" size="md" disabled={true} />
  )
}
`

export { DisabledSwitch, DisabledSwitchCode }
