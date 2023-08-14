"use client";
import { Skeleton } from "@/src/components/Skeleton";

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
import { Skeleton } from "keep-design";

const DefaultSkeleton = () => {
  return (
    <div className="max-w-sm py-5">
      <Skeleton>
        <Skeleton.Line height="h-5" />
      </Skeleton>
    </div>
  );
};

export default DefaultSkeleton;
`;

export { DefaultSkeleton, DefaultSkeletonCode };
