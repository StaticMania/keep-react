import { Toggle } from '../../../../src'

const SwitchWithIcon = () => {
  return <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} />
}

const SwitchWithIconCode = `
import { Toggle } from "keep-react"

export const SwitchComponent = () => {
  const [toggle, setToggle] = useState(false)
  return <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} onChange={setToggle} />
}
`
export { SwitchWithIcon, SwitchWithIconCode }
