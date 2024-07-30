import { Switch } from '../../../../src'

const DisabledSwitch = () => {
  return <Switch disabled />
}

const DisabledSwitchCode = `
import { Switch } from 'keep-react'

export const SwitchComponent = () => {
  return (
    <Switch disabled/>
  )
}
`

export { DisabledSwitch, DisabledSwitchCode }
