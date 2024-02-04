'use client'
import { Badge } from '../../../../src'

const SizesOfBadge = () => {
  return (
    <div className="space-y-4">
      <div className="space-x-3">
        <Badge size="sm" color="primary">
          Primary
        </Badge>
        <Badge size="sm" color="secondary">
          Secondary
        </Badge>
        <Badge size="sm" color="success">
          Success
        </Badge>
        <Badge size="sm" color="warning">
          Warning
        </Badge>
        <Badge size="sm" color="error">
          Error
        </Badge>
      </div>
      <div className="space-x-3">
        <Badge size="md" color="primary">
          Primary
        </Badge>
        <Badge size="md" color="secondary">
          Secondary
        </Badge>
        <Badge size="md" color="success">
          Success
        </Badge>
        <Badge size="md" color="warning">
          Warning
        </Badge>
        <Badge size="md" color="error">
          Error
        </Badge>
      </div>
    </div>
  )
}

const SizesOfBadgeCode = `
"use client";
import { Badge } from "keep-react";

export const BadgeComponent = () => {
  return (
    <>
      <Badge size="sm">Small Badge</Badge>
      <Badge size="md">Medium Badge</Badge>
    </>
  );
};
`

export { SizesOfBadge, SizesOfBadgeCode }
