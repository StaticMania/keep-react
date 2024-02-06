'use client'
import { Divider } from '../../../../src'

const DividerColor = () => {
  return (
    <section className="max-w-xl space-y-4">
      <Divider color="primary" />
      <Divider color="secondary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="error" />
    </section>
  )
}

const DividerColorCode = `
'use client'
import { Divider } from 'keep-react'

export const DividerComponent = () => {
  return (
    <section className="max-w-xl space-y-4">
      <Divider color="primary" />
      <Divider color="secondary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="error" />
    </section>
  )
}
`

export { DividerColor, DividerColorCode }
