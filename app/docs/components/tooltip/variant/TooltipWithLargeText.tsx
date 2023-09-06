"use client";
import { Button, Tooltip } from "@/src/components";

const TooltipWithLargeText = () => {
  return (
    <div className=" flex flex-wrap items-end gap-2">
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="bottom"
        animation="duration-300"
        style="light"
      >
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
    </div>
  );
};

const TooltipWithLargeTextCode = `
"use client";
import { Tooltip,Button } from "keep-react";

const TooltipWithLargeText = () => {
  return (
    <div className=" flex flex-wrap items-end gap-2">
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="top"
        animation="duration-300"
        style="dark"
      >
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
      <Tooltip
        title="Tooltip Title here"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, alias."
        trigger="hover"
        placement="bottom"
        animation="duration-300"
        style="light"
      >
        <Button size="sm" type="primary">
          Tooltip Content
        </Button>
      </Tooltip>
    </div>
  );
};

export default TooltipWithLargeText;
`;

export { TooltipWithLargeText, TooltipWithLargeTextCode };
