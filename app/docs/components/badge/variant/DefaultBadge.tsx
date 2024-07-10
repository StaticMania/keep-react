import { Badge } from '../../../../src'

const DefaultBadge = () => {
  return (
    <div className="p-2">
      <Badge>Default Badge</Badge>
    </div>
  )
}

const DefaultBadgeCode = `
import { Badge } from 'keep-react'

export const BadgeComponent = () => {
  return <Badge>Default Badge</Badge>
}
`

export { DefaultBadge, DefaultBadgeCode }
