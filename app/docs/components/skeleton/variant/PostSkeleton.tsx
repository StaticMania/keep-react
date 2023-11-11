'use client'
import { Skeleton } from '~/src'

const PostSkeleton = () => {
  return (
    <div className="max-w-3xl py-5">
      <Skeleton>
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
  )
}

const PostSkeletonCode = `
"use client";
import { Skeleton } from "keep-react";

export const SkeletonComponent = () => {
  return (
    <div className="max-w-3xl py-5">
      <Skeleton>
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
}
`

export { PostSkeleton, PostSkeletonCode }
