import { Tag } from '../../../../src'

const DisabledTag = () => {
  return <Tag disabled={true}>Disabled Tag</Tag>
}

const DisabledTagCode = {
  'TagComponent.tsx': `
import { Tag } from 'keep-react'

export const TagComponent = () => {
  return <Tag disabled={true}>Disabled Tag</Tag>
}
`,
}

export { DisabledTag, DisabledTagCode }
