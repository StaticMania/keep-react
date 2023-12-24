'use client'
import { Badge } from '../../../../src'

const VariantOfBadge = () => {
  return (
    <div className="my-3 flex flex-wrap items-end gap-2">
      <Badge size="sm" colorType="light" color="info">
        Badge
      </Badge>
      <Badge size="sm" colorType="strong" color="info">
        Badge
      </Badge>
      <Badge size="sm" colorType="strong" badgeType="text" color="info">
        Badge
      </Badge>
    </div>
  )
}

const VariantOfBadgeCode = `
"use client";
import { Badge } from "keep-react";

export const BadgeComponent = () => {
  return (
    <div className="flex items-center gap-3">
      <Badge size="sm" colorType="light" color="info">Badge</Badge>
      <Badge size="sm" colorType="strong" color="info">Badge</Badge>
      <Badge size="sm" colorType="strong" badgeType="text" color="info">Badge</Badge>
    </div>
  );
};
`

export { VariantOfBadge, VariantOfBadgeCode }
