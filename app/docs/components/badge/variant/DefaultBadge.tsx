'use client'
import { Badge } from '~/src'

const DefaultBadge = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Badge size="xs" colorType="light" color="info">
        Default
      </Badge>
      <Badge size="xs" colorType="light" color="gray">
        Gray Badge
      </Badge>
      <Badge size="xs" colorType="light" color="error">
        Error Badges
      </Badge>
      <Badge size="xs" colorType="light" color="success">
        Success Badges
      </Badge>
      <Badge size="xs" colorType="light" color="warning">
        Warning Badges
      </Badge>
    </div>
  )
}

const DefaultBadgeCode = `
"use client";
import { Badge } from "keep-react";

export const BadgeComponent = () => {
  return (
    <div className="flex items-center gap-3">
      <Badge size="xs" colorType="light" color="info">
        Default
      </Badge>
      <Badge size="xs" colorType="light" color="gray">
        Gray Badge
      </Badge>
      <Badge size="xs" colorType="light" color="error">
        Error Badges
      </Badge>
      <Badge size="xs" colorType="light" color="success">
        Success Badges
      </Badge>
      <Badge size="xs" colorType="light" color="warning">
        Warning Badges
      </Badge>
    </div>
  );
};
`

export { DefaultBadge, DefaultBadgeCode }
