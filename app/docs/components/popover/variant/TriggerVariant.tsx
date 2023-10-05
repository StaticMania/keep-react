"use client";
import { Button, Popover } from "~/src";

const TriggerVariantPopover = () => {
  return (
    <div className="px-3 py-2">
      <Popover
        trigger="hover"
        title="Popover title here"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
      >
        <Button size="xs">Popover</Button>
      </Popover>
    </div>
  );
};

const TriggerVariantPopoverCode = `
"use client";
import { Button, Popover } from "keep-react";

const TriggerVariantPopover = () => {
  return (
    <Popover
      trigger="hover"
      title="Popover title here"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    >
      <Button size="xs">Popover</Button>
    </Popover>
  );
};

export default TriggerVariantPopover;
`;

export { TriggerVariantPopover, TriggerVariantPopoverCode };
