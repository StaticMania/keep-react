"use client";
import { Badge } from "@/src/components/Badge";

const SizesOfBadge = () => {
  return (
    <div>
      <h2>Small Badge</h2>
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
      <h2>Large Badge</h2>
      <div className="flex flex-wrap items-end gap-2">
        <Badge size="sm" colorType="light" color="info">
          Default
        </Badge>
        <Badge size="sm" colorType="light" color="gray">
          Gray Badge
        </Badge>
        <Badge size="sm" colorType="light" color="error">
          Error Badges
        </Badge>
        <Badge size="sm" colorType="light" color="success">
          Success Badges
        </Badge>
        <Badge size="sm" colorType="light" color="warning">
          Warning Badges
        </Badge>
      </div>
    </div>
  );
};

const SizesOfBadgeCode = `
"use client";
import { Badge } from "keep-design";

const SizesOfBadge = () => {
  return (
   <div>
      <h2>Small Badge</h2>
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
      <h2>Large Badge</h2>
      <div className="flex flex-wrap items-end gap-2">
        <Badge size="sm" colorType="light" color="info">
          Default
        </Badge>
        <Badge size="sm" colorType="light" color="gray">
          Gray Badge
        </Badge>
        <Badge size="sm" colorType="light" color="error">
          Error Badges
        </Badge>
        <Badge size="sm" colorType="light" color="success">
          Success Badges
        </Badge>
        <Badge size="sm" colorType="light" color="warning">
          Warning Badges
        </Badge>
      </div>
    </div>
  );
};

export default SizesOfBadge;

`;

export { SizesOfBadge, SizesOfBadgeCode };
