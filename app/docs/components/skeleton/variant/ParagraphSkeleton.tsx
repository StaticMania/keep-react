'use client'
import { Skeleton } from '../../../../src'

const ParagraphSkeleton = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <Skeleton.Line className="h-4 w-11/12" />
      <Skeleton.Line className="h-4 w-9/12" />
      <Skeleton.Line className="h-4 w-10/12" />
      <Skeleton.Line className="h-4 w-7/12" />
    </Skeleton>
  )
}

const ParagraphSkeletonCode = `
"use client";
import { Skeleton } from "keep-react";

export const SkeletonComponent = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <Skeleton.Line className="h-4 w-11/12" />
      <Skeleton.Line className="h-4 w-9/12" />
      <Skeleton.Line className="h-4 w-10/12" />
      <Skeleton.Line className="h-4 w-7/12" />
    </Skeleton>
  )
}
`

export { ParagraphSkeleton, ParagraphSkeletonCode }
