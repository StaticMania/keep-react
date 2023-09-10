"use client";
import { Button, Tooltip } from "~/src";

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
import { Button,Tooltip } from "keep-react";

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
