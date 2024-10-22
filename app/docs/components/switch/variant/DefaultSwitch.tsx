'use client'
import { Switch } from '../../../../src'

const DefaultSwitch = () => {
  return (
    <div className="px-5 py-3">
      <Switch onCheckedChange={(value) => console.log(value)} />
    </div>
  )
}

const DefaultSwitchCode = {
  'SwitchComponent.tsx': `
import { Switch } from 'keep-react'

export const SwitchComponent = () => {
  return <Switch />
}
`,
}

export { DefaultSwitch, DefaultSwitchCode }
