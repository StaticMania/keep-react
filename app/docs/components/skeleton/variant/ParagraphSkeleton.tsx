'use client'
import { Skeleton } from '~/src'

const ParagraphSkeleton = () => {
  return (
    <div className="max-w-xl py-5">
      <Skeleton animation={true}>
        <div className="w-11/12">
          <Skeleton.Line height="h-6" />
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
      </Skeleton>
    </div>
  )
}

const ParagraphSkeletonCode = `
"use client";
import { Skeleton } from "keep-react";

export const SkeletonComponent = () => {
  return (
    <div className="max-w-xl py-5">
      <Skeleton animation={true}>
        <div className="w-11/12">
          <Skeleton.Line height="h-6" />
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
      </Skeleton>
    </div>
  );
}
`

export { ParagraphSkeleton, ParagraphSkeletonCode }
