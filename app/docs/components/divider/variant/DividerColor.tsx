import { Divider } from '../../../../src'

const DividerColor = () => {
  return (
    <section className="w-full space-y-4">
      <Divider color="primary" />
      <Divider color="secondary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="error" />
    </section>
  )
}

const DividerColorCode = {
  'DividerComponent.tsx': `
import { Divider } from 'keep-react'

export const DividerComponent = () => {
  return (
    <section className="w-full space-y-4">
      <Divider color="primary" />
      <Divider color="secondary" />
      <Divider color="success" />
      <Divider color="warning" />
      <Divider color="error" />
    </section>
  )
}
`,
}

export { DividerColor, DividerColorCode }
