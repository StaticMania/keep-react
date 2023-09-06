"use client";
import { Button, Toast } from "@/src/components";
import { ArrowsClockwise } from "phosphor-react";

const InteractiveToast = () => {
  return (
    <Toast>
      <div className="flex !items-start">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-400 ">
          <ArrowsClockwise className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
            Update available
          </span>
          <div className="mb-2 text-sm font-normal">
            A new software version is available for download.
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <Button type="primary" size="xs">
                Update
              </Button>
            </div>
            <div className="w-full">
              <Button size="xs" type="outlineGray">
                Not now
              </Button>
            </div>
          </div>
        </div>
        <Toast.Toggle />
      </div>
    </Toast>
  );
};

const InteractiveToastCode = `
"use client";
import { Button,Toast } from "keep-react";
import { ArrowsClockwise } from "phosphor-react";

const InteractiveToast = () => {
  return (
    <Toast>
      <div className="flex !items-start">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-400 ">
          <ArrowsClockwise className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          <span className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
            Update available
          </span>
          <div className="mb-2 text-sm font-normal">
            A new software version is available for download.
          </div>
          <div className="flex gap-2">
            <div className="w-full">
              <Button type="primary" size="xs">
                Update
              </Button>
            </div>
            <div className="w-full">
              <Button size="xs" type="outlineGray">
                Not now
              </Button>
            </div>
          </div>
        </div>
        <Toast.Toggle />
      </div>
    </Toast>
  );
};

export default InteractiveToast;

`;
export { InteractiveToast, InteractiveToastCode };
