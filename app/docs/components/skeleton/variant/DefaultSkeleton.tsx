"use client";
import { Skeleton } from "~/src";

const DefaultSkeleton = () => {
  return (
    <div className="max-w-sm py-5">
      <Skeleton>
        <Skeleton.Line height="h-5" />
      </Skeleton>
    </div>
  );
};

const DefaultSkeletonCode = `
"use client";
import { Skeleton } from "keep-react";

export const SkeletonComponent = () => {
  return (
    <div className="max-w-sm py-5">
      <Skeleton>
        <Skeleton.Line height="h-5" />
      </Skeleton>
    </div>
  );
}
`;

export { DefaultSkeleton, DefaultSkeletonCode };
