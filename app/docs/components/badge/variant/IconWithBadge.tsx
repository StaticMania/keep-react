"use client";
import { Badge } from "~/src";
import { Crown, ShieldCheck } from "phosphor-react";

const IconWithBadge = () => {
  return (
    <div className="flex flex-wrap items-end gap-2 my-3">
      <Badge
        size="sm"
        colorType="strong"
        color="info"
        icon={<Crown size={18} />}
        iconPosition="left"
      >
        Badges
      </Badge>
      <Badge
        size="sm"
        colorType="light"
        color="info"
        icon={<ShieldCheck size={18} />}
        iconPosition="right"
      >
        Badges
      </Badge>
    </div>
  );
};

const IconWithBadgeCode = `
"use client";
import { Badge } from "keep-react";
import { Crown, ShieldCheck } from "phosphor-react";

export const BadgeComponent = () => {
  return (
    <>
      <Badge
        size="sm"
        colorType="strong"
        color="info"
        icon={<Crown size={18} />}
        iconPosition="left"
      >
        Badges
      </Badge>
      <Badge
        size="sm"
        colorType="light"
        color="info"
        icon={<ShieldCheck size={18} />}
        iconPosition="right"
      >
        Badges
      </Badge>
    </>
  );
}
`;

export { IconWithBadge, IconWithBadgeCode };
