'use client'
import { Switch } from '../../../../src'

const DisabledSwitch = () => {
  return (
    <div className="px-5 py-3">
      <Switch disabled />
    </div>
  )
}

const DisabledSwitchCode = {
  'SwitchComponent.tsx': `
import { Switch } from 'keep-react'

export const SwitchComponent = () => {
  return (
    <Switch disabled/>
  )
}
`,
}

export { DisabledSwitch, DisabledSwitchCode }
