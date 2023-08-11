"use client";
import { Badge } from "@/src/components/Badge";

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
  );
};

const DefaultBadgeCode = `
"use client";
import { Badge } from "keep-design";

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
  );
};

export default DefaultBadge;

`;

export { DefaultBadge, DefaultBadgeCode };
