import { Skeleton, SkeletonLine } from '../../../../src'

const ParagraphSkeleton = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <SkeletonLine className="h-4 w-11/12" />
      <SkeletonLine className="h-4 w-9/12" />
      <SkeletonLine className="h-4 w-10/12" />
      <SkeletonLine className="h-4 w-7/12" />
    </Skeleton>
  )
}

const ParagraphSkeletonCode = {
  'SkeletonComponent.tsx': `
import { Skeleton, SkeletonLine } from "keep-react";

export const SkeletonComponent = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <SkeletonLine className="h-4 w-11/12" />
      <SkeletonLine className="h-4 w-9/12" />
      <SkeletonLine className="h-4 w-10/12" />
      <SkeletonLine className="h-4 w-7/12" />
    </Skeleton>
  )
}
`,
}

export { ParagraphSkeleton, ParagraphSkeletonCode }
