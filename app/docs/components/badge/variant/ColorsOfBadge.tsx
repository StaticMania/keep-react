import { Badge } from '../../../../src'

const ColorsOfBadge = () => {
  return (
    <div className="space-x-2 p-2">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </div>
  )
}

const ColorsOfBadgeCode = {
  'BadgeComponent.tsx': `
import { Badge } from 'keep-react'

export const BadgeComponent = () => {
  return (
    <>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </>
  )
}
`,
}

export { ColorsOfBadge, ColorsOfBadgeCode }
