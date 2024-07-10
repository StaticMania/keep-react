import { Tag } from '../../../../src'

const DefaultTag = () => {
  return <Tag>Default Tag</Tag>
}

const DefaultTagCode = `
import { Tag } from 'keep-react'

export const TagComponent = () => {
  return <Tag color="gray">Default Tag</Tag>
}
`

export { DefaultTag, DefaultTagCode }
