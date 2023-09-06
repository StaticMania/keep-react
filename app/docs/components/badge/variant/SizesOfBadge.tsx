"use client";
import { Badge } from "@/src/components";

const SizesOfBadge = () => {
  return (
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
  );
};

const SizesOfBadgeCode = `
"use client";
import { Badge } from "keep-react";

const SizesOfBadge = () => {
  return (
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
  );
};

export default SizesOfBadge;
`;

export { SizesOfBadge, SizesOfBadgeCode };
