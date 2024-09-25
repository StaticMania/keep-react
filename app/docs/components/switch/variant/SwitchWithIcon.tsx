import { Switch } from '../../../../src'

const SwitchWithIcon = () => {
  return (
    <div className="px-5 py-3">
      <Switch variant="icon" />
    </div>
  )
}

const SwitchWithIconCode = {
  'SwitchComponent.tsx': `
import { Switch } from "keep-react"

export const SwitchComponent = () => {
  return <Switch variant='icon' />
}
`,
}
export { SwitchWithIcon, SwitchWithIconCode }
