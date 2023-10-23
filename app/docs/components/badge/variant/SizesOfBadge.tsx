"use client";
import { Badge } from "~/src";

const SizesOfBadge = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Badge size="xs" colorType="light" color="info">
        Extra Small
      </Badge>
      <Badge size="sm" colorType="light" color="gray">
        Small Badge
      </Badge>
    </div>
  );
};

const SizesOfBadgeCode = `
"use client";
import { Badge } from "keep-react";

export const BadgeComponent = () => {
  return (
    <>
      <Badge size="xs" colorType="light" color="info">Extra Small</Badge>
      <Badge size="sm" colorType="light" color="gray">Small Badge</Badge>
    </>
  );
};
`;

export { SizesOfBadge, SizesOfBadgeCode };
