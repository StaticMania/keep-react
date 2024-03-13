'use client'
import { Divider, Typography } from '../../../../src'

const DefaultDivider = () => {
  return (
    <section className="max-w-xl space-y-3">
      <Typography variant="p">I am alone, and feel the charm of existence in this spot.</Typography>
      <Divider />
      <Typography variant="p">I should be incapable of drawing a single stroke at the present moment.</Typography>
      <Divider />
      <Typography variant="p">A wonderful serenity has taken possession of my entire soul.</Typography>
    </section>
  )
}

const DefaultDividerCode = `
'use client'
import { Divider, Typography } from 'keep-react'

export const DividerComponent = () => {
  return (
    <section className="max-w-xl space-y-3">
      <Typography variant="p">I am alone, and feel the charm of existence in this spot.</Typography>
      <Divider />
      <Typography variant="p">I should be incapable of drawing a single stroke at the present moment.</Typography>
      <Divider />
      <Typography variant="p">A wonderful serenity has taken possession of my entire soul.</Typography>
    </section>
  )
}
`

export { DefaultDivider, DefaultDividerCode }
