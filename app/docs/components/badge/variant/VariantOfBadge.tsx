"use client";
import { Badge } from "~/src";

const VariantOfBadge = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 my-3">
      <Badge size="sm" colorType="light" color="info">
        Default
      </Badge>
      <Badge size="sm" colorType="strong" color="info">
        Default
      </Badge>
      <Badge size="sm" colorType="strong" badgeType="text" color="info">
        Badges
      </Badge>
    </div>
  );
};

const VariantOfBadgeCode = `
"use client";
import { Badge } from "keep-react";

export const BadgeComponent = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 my-3">
      <Badge size="sm" colorType="light" color="info">
        Default
      </Badge>
      <Badge size="sm" colorType="strong" color="info">
        Default
      </Badge>
      <Badge size="sm" colorType="strong" badgeType="text" color="info">
        Badges
      </Badge>
    </div>
  );
};
`;

export { VariantOfBadge, VariantOfBadgeCode };
