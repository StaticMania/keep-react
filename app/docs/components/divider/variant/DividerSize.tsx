import { Divider } from '../../../../src'

const DividerSize = () => {
  return (
    <section className="max-w-xl space-y-3">
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size="2xl" />
    </section>
  )
}

const DividerSizeCode = {
  'DividerComponent.tsx': `
import { Divider } from 'keep-react'

export const DividerComponent = () => {
  return (
    <section className="max-w-xl space-y-3">
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size="2xl" />
    </section>
  )
}
`,
}

export { DividerSize, DividerSizeCode }
