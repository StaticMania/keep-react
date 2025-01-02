import { Divider } from '../../../../src'

const DividerAlign = () => {
  return (
    <section className="w-full space-y-3">
      <Divider variant="start">Left Align</Divider>
      <Divider variant="center">Center Align</Divider>
      <Divider variant="end">Right Align</Divider>
    </section>
  )
}

const DividerAlignCode = {
  'DividerComponent.tsx': `
import { Divider } from 'keep-react'

export const DividerComponent = () => {
  return (
    <section className="w-full space-y-3">
      <Divider variant="start">Left Align</Divider>
      <Divider variant="center">Center Align</Divider>
      <Divider variant="end">Right Align</Divider>
    </section>
  )
}
`,
}

export { DividerAlign, DividerAlignCode }
