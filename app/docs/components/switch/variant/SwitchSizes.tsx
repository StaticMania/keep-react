'use client'
import { Toggle } from '../../../../src'

const SwitchSizes = () => {
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Small" size="sm" />
      <Toggle bgColor="primary" label="Medium" size="md" />
      <Toggle bgColor="primary" label="Large" size="lg" />
    </div>
  )
}

const SwitchSizesCode = `
"use client"
import { useState } from "react"
import { Toggle } from "keep-react"

export const SwitchComponent = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <div className="flex gap-5">
      <Toggle bgColor="primary" label="Small" size="sm" onChange={setToggle} />
      <Toggle bgColor="primary" label="Medium" size="md" onChange={setToggle} />
      <Toggle bgColor="primary" label="Large" size="lg" onChange={setToggle} />
    </div>
  )
}
`

export { SwitchSizes, SwitchSizesCode }
