"use client";

import { Button } from "@/src/components/Button";
import { Tooltip } from "@/src/components/Tooltip";

const TooltipTriggering = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Hover
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="click"
        placement="bottom"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Click
        </Button>
      </Tooltip>
    </div>
  );
};

const TooltipTriggeringCode = `
"use client";
import {Tooltip,Button } from "keep-design";

const TooltipTriggering = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Tooltip
        content="Tooltips text here"
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Hover
        </Button>
      </Tooltip>
      <Tooltip
        content="Tooltips text here"
        trigger="click"
        placement="bottom"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Click
        </Button>
      </Tooltip>
    </div>
  );
};

export default TooltipTriggering;

`;

export { TooltipTriggering, TooltipTriggeringCode };
