'use client'
import { Divider } from '../../../../src'

const DefaultDivider = () => {
  return (
    <section className="max-w-xl space-y-3">
      <p>I am alone, and feel the charm of existence in this spot.</p>
      <Divider />
      <p>I should be incapable of drawing a single stroke at the present moment.</p>
      <Divider />
      <p>A wonderful serenity has taken possession of my entire soul.</p>
    </section>
  )
}

const DefaultDividerCode = `
'use client'
import { Divider } from 'keep-react'

export const DividerComponent = () => {
  return (
    <section className="max-w-xl space-y-3">
      <p>I am alone, and feel the charm of existence in this spot.</p>
      <Divider />
      <p>I should be incapable of drawing a single stroke at the present moment.</p>
      <Divider />
      <p>A wonderful serenity has taken possession of my entire soul.</p>
    </section>
  )
}
`

export { DefaultDivider, DefaultDividerCode }
