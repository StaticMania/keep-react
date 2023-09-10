"use client";
import { Skeleton } from "~/src";

const SkeletonWithAnimation = () => {
  return (
    <div className="max-w-3xl py-5">
      <Skeleton animation={true}>
        <div className="w-11/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-10/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-8/12">
          <Skeleton.Line height="h-[350px]" />
        </div>
        <div className="w-11/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-9/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-10/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-7/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-3/12">
          <Skeleton.Line height="h-[46px]" />
        </div>
      </Skeleton>
    </div>
  );
};

const SkeletonWithAnimationCode = `
"use client";
import { Skeleton } from "~/src/Skeleton";

const SkeletonWithAnimation = () => {
  return (
    <div className="max-w-3xl py-5">
      <Skeleton animation={true}>
        <div className="w-11/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-10/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-8/12">
          <Skeleton.Line height="h-[350px]" />
        </div>
        <div className="w-11/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-9/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-10/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-7/12">
          <Skeleton.Line height="h-4" />
        </div>
        <div className="w-3/12">
          <Skeleton.Line height="h-[46px]" />
        </div>
      </Skeleton>
    </div>
  );
};

export default SkeletonWithAnimation;

`;
export { SkeletonWithAnimation, SkeletonWithAnimationCode };
