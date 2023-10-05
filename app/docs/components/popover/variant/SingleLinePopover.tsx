"use client";
import { Button, Popover } from "~/src";

const SingleLinePopover = () => {
  return (
    <div className="px-3 py-2">
      <Popover
        customClass="!w-[20rem]"
        additinalContent={
          <h2 className="text-lg leading-6 tracking-[-0.3px] font-medium text-slate-500">
            Single line message
          </h2>
        }
      >
        <Button size="xs">Popover</Button>
      </Popover>
    </div>
  );
};

const SingleLinePopoverCode = `
"use client";
import { Button, Popover } from "keep-react";

const SingleLinePopover = () => {
  return (
    <Popover
      customClass="!w-[20rem]"
      additinalContent={
        <h2 className="text-lg leading-6 tracking-[-0.3px] font-medium text-slate-500">
          Single line message
        </h2>
      }
    >
      <Button size="xs">Popover</Button>
    </Popover>
  );
};

export default SingleLinePopover;
`;
export { SingleLinePopover, SingleLinePopoverCode };
