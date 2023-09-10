"use client";
import { Badge } from "~/src";
import { Crown, ShieldCheck } from "phosphor-react";

const IconWithBadge = () => {
  return (
    <div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Left Side Icon With Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge
          size="sm"
          colorType="strong"
          color="info"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="gray"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="error"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="success"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="warning"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
      </div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">
        Right Side Icon With Badge
      </h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge
          size="sm"
          colorType="strong"
          color="info"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="gray"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="error"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="success"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="warning"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
      </div>
    </div>
  );
};

const IconWithBadgeCode = `
"use client";
import { Badge } from "keep-react";

const IconWithBadge = () => {
  return (
     <div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">Left Side Icon With Badge</h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge
          size="sm"
          colorType="strong"
          color="info"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="gray"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="error"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="success"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="warning"
          icon={<Crown size={18} color="#ffffff" weight="light" />}
          iconPosition="left"
        >
          Badges
        </Badge>
      </div>
      <h2 className="text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900 mb-2">Right Side Icon With Badge</h2>
      <div className="flex flex-wrap items-end gap-2 my-3">
        <Badge
          size="sm"
          colorType="strong"
          color="info"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="gray"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="error"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="success"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
        <Badge
          size="sm"
          colorType="strong"
          color="warning"
          icon={<ShieldCheck size={18} color="#ffffff" weight="light" />}
          iconPosition="right"
        >
          Badges
        </Badge>
      </div>
    </div>
  );
};

export default IconWithBadge;

`;

export { IconWithBadge, IconWithBadgeCode };
