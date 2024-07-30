import { Switch } from '../../../../src'

const DefaultSwitch = () => {
  return <Switch onCheckedChange={(value) => console.log(value)} />
}

const DefaultSwitchCode = `
import { Switch } from 'keep-react'

export const SwitchComponent = () => {
  return <Switch />
}
`

export { DefaultSwitch, DefaultSwitchCode }
