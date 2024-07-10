import { Badge } from '../../../../src'

const VariantOfBadge = () => {
  return (
    <div className="space-y-4 p-2">
      <div className="space-x-3">
        <Badge variant="base" color="primary">
          Primary
        </Badge>
        <Badge variant="base" color="secondary">
          Secondary
        </Badge>
        <Badge variant="base" color="success">
          Success
        </Badge>
        <Badge variant="base" color="warning">
          Warning
        </Badge>
        <Badge variant="base" color="error">
          Error
        </Badge>
      </div>
      <div className="space-x-3">
        <Badge variant="border" color="primary">
          Primary
        </Badge>
        <Badge variant="border" color="secondary">
          Secondary
        </Badge>
        <Badge variant="border" color="success">
          Success
        </Badge>
        <Badge variant="border" color="warning">
          Warning
        </Badge>
        <Badge variant="border" color="error">
          Error
        </Badge>
      </div>
      <div className="space-x-3">
        <Badge variant="background" color="primary">
          Primary
        </Badge>
        <Badge variant="background" color="secondary">
          Secondary
        </Badge>
        <Badge variant="background" color="success">
          Success
        </Badge>
        <Badge variant="background" color="warning">
          Warning
        </Badge>
        <Badge variant="background" color="error">
          Error
        </Badge>
      </div>
    </div>
  )
}

const VariantOfBadgeCode = `
import { Badge } from 'keep-react'

export const BadgeComponent = () => {
  return (
    <>
      <Badge variant="base">Base</Badge>
      <Badge variant="border">Border</Badge>
      <Badge variant="background">Background</Badge>
    </>
  );
};
`

export { VariantOfBadge, VariantOfBadgeCode }
