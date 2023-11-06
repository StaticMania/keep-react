"use client";
import { Badge } from "~/src";
import { Check, Checks, CloudCheck, XCircle } from "phosphor-react";

const OnlyIconOfBadge = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="info"
        icon={<Check size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="gray"
        icon={<Check size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="error"
        icon={<XCircle size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="success"
        icon={<Checks size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="warning"
        icon={<CloudCheck size={20} weight="light" />}
        iconPosition="right"
      />
    </div>
  );
};

const OnlyIconOfBadgeCode = `
"use client";
import { Badge } from "keep-react";
import { Check, Checks, CloudCheck, XCircle } from "phosphor-react";

export const BadgeComponent = () => {
  return (
    <div className="flex items-center gap-3">
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="info"
        icon={<Check size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="gray"
        icon={<Check size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="error"
        icon={<XCircle size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="success"
        icon={<Checks size={20} weight="light" />}
        iconPosition="right"
      />
      <Badge
        size="sm"
        colorType="strong"
        badgeType="outline"
        color="warning"
        icon={<CloudCheck size={20} weight="light" />}
        iconPosition="right"
      />
    </div>
  );
}
`;

export { OnlyIconOfBadge, OnlyIconOfBadgeCode };
