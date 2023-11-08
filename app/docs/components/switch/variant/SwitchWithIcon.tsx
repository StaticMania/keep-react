'use client'
import { Toggle } from '~/src'

const SwitchWithIcon = () => {
  return <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} />
}

const SwitchWithIconCode = `
"use client";
import { Toggle } from "keep-react";

export const SwitchComponent = () => {
  return <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} />;
}
`
export { SwitchWithIcon, SwitchWithIconCode }
