"use client";
import { Skeleton } from "@/src/components";

const SkeletonLayout = () => {
  return (
    <div className="max-w-lg py-5">
      <Skeleton>
        <Skeleton.Line height="h-5" />
        <div className="w-3/4">
          <Skeleton.Line height="h-[60px]" />
          <Skeleton.Line height="h-9" />
        </div>
        <Skeleton.Line height="h-5" />
      </Skeleton>
    </div>
  );
};

const SkeletonLayoutCode = `
"use client";
import { Skeleton } from "keep-react";

const SkeletonLayout = () => {
  return (
    <div className="max-w-lg py-5">
      <Skeleton>
        <Skeleton.Line height="h-5" />
        <div className="w-3/4">
          <Skeleton.Line height="h-[60px]" />
          <Skeleton.Line height="h-9" />
        </div>
        <Skeleton.Line height="h-5" />
      </Skeleton>
    </div>
  );
};

export default SkeletonLayout;
`;

export { SkeletonLayout, SkeletonLayoutCode };
