"use client";
import { Button } from "@/src/components/Button";
import { Tooltip } from "@/src/components/Tooltip";

const DefaultTooltip = () => {
  return (
    <Tooltip
      content="Tooltips text here"
      trigger="hover"
      placement="right"
      animation="duration-300"
      style="dark"
    >
      <Button size="sm" type="primary">
        Default Tooltip
      </Button>
    </Tooltip>
  );
};

const DefaultTooltipCode = `
"use client";
import { Button,Tooltip } from "keep-design";

const DefaultTooltip = () => {
  return (
    <Tooltip
      content="Tooltips text here"
      trigger="hover"
      placement="right"
      animation="duration-300"
      style="dark"
    >
      <Button size="sm" type="primary">
        Default Tooltip
      </Button>
    </Tooltip>
  );
};

export default DefaultTooltip;
`;

export { DefaultTooltip, DefaultTooltipCode };
