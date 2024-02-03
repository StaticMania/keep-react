'use client'
import { Skeleton } from '../../../../src'

const CommentLayout = () => {
  return (
    <div className="max-w-lg py-5">
      <Skeleton>
        <Skeleton.Line height="h-5" />
        <div className="grid grid-cols-4 items-center justify-center">
          <div className="col-span-1 flex  justify-center ">
            <Skeleton.Avatar />
          </div>
          <div className="col-span-3 flex items-center justify-center">
            <Skeleton.Line height="h-[60px]" />
          </div>
        </div>
      </Skeleton>
    </div>
  )
}

const CommentLayoutCode = `
"use client";
import { Skeleton } from "keep-react";

export const SkeletonComponent = () => {
  return (
    <div className="max-w-lg py-5">
      <Skeleton>
        <Skeleton.Line height="h-5" />
        <div className="grid grid-cols-4 items-center justify-center">
          <div className="col-span-1 flex  justify-center ">
            <Skeleton.Avatar />
          </div>
          <div className="col-span-3 flex items-center justify-center">
            <Skeleton.Line height="h-[60px]" />
          </div>
        </div>
      </Skeleton>
    </div>
  );
}
`

export { CommentLayout, CommentLayoutCode }
