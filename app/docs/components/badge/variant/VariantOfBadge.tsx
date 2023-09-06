"use client";
import { Badge } from "@/src/components";

const VariantOfBadge = () => {
  return (
    <div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Light Variant Of Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
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
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Dark Variant Of Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge size="sm" colorType="strong" color="info">
          Default
        </Badge>
        <Badge size="sm" colorType="strong" color="gray">
          Gray Badge
        </Badge>
        <Badge size="sm" colorType="strong" color="error">
          Error Badges
        </Badge>
        <Badge size="sm" colorType="strong" color="success">
          Success Badges
        </Badge>
        <Badge size="sm" colorType="strong" color="warning">
          Warning Badges
        </Badge>
      </div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Text Variant Of Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge size="sm" colorType="strong" badgeType="text" color="info">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="gray">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="error">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="success">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="warning">
          Badges
        </Badge>
      </div>
    </div>
  );
};

const VariantOfBadgeCode = `
"use client";
import { Badge } from "keep-react";

const VariantOfBadge = () => {
  return (
    <div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Light Variant Of Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
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
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Dark Variant Of Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge size="sm" colorType="strong" color="info">
          Default
        </Badge>
        <Badge size="sm" colorType="strong" color="gray">
          Gray Badge
        </Badge>
        <Badge size="sm" colorType="strong" color="error">
          Error Badges
        </Badge>
        <Badge size="sm" colorType="strong" color="success">
          Success Badges
        </Badge>
        <Badge size="sm" colorType="strong" color="warning">
          Warning Badges
        </Badge>
      </div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Text Variant Of Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge size="sm" colorType="strong" badgeType="text" color="info">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="gray">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="error">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="success">
          Badges
        </Badge>
        <Badge size="sm" colorType="strong" badgeType="text" color="warning">
          Badges
        </Badge>
      </div>
    </div>
  );
};

export default VariantOfBadge;

`;

export { VariantOfBadge, VariantOfBadgeCode };
