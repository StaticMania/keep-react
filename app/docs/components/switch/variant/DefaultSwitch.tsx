'use client'
import { Toggle } from '../../../../src'

const DefaultSwitch = () => {
  return <Toggle bgColor="primary" size="md" />
}

const DefaultSwitchCode = `
"use client";
import { Toggle } from "keep-react";

export const SwitchComponent = () => {
  const [toggle, setToggle] = useState(false)
  return return <Toggle bgColor="primary" size="md" onChange={setToggle} />
}
`

export { DefaultSwitch, DefaultSwitchCode }
