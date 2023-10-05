"use client";
import { Button, Popover } from "~/src";

const OneParagraphPopover = () => {
  return (
    <div className="py-3 px-2">
      <Popover
        additinalContent={
          <>
            <h2 className="text-base font-medium text-slate-500">
              There are many variations of passages of Lorem Ipsum available.
            </h2>
            <button className="mt-3 text-sm font-medium underline text-primary-400 underline-offset-[3px]">
              Skip Now
            </button>
          </>
        }
      >
        <Button size="xs">Popover</Button>
      </Popover>
    </div>
  );
};

const OneParagraphPopoverCode = `
"use client";
import { Button, Popover } from "keep-react";

const OneParagraphPopover = () => {
  return (
    <Popover
      additinalContent={
        <>
          <h2 className="text-base font-medium text-slate-500">
            There are many variations of passages of Lorem Ipsum available.
          </h2>
          <button className="mt-3 text-sm font-medium underline text-primary-400 underline-offset-[3px]">
            Skip Now
          </button>
        </>
      }
    >
      <Button size="xs">Popover</Button>
    </Popover>
  );
};

export default OneParagraphPopover;
`;

export { OneParagraphPopover, OneParagraphPopoverCode };
