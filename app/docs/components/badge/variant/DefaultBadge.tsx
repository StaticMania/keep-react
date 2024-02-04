'use client'
import { Badge } from '../../../../src'

const DefaultBadge = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
    </div>
  )
}

const DefaultBadgeCode = `
'use client'
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

`

export { DefaultBadge, DefaultBadgeCode }
