import { Skeleton, SkeletonLine } from '../../../../src'

const PostSkeleton = () => {
  return (
    <Skeleton className="mx-auto max-w-md space-y-2.5">
      <SkeletonLine className="h-52 w-full" />
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-3/5" />
      <SkeletonLine className="h-4 w-4/5" />
      <SkeletonLine className="h-10 w-2/5" />
    </Skeleton>
  )
}

const PostSkeletonCode = {
  'SkeletonComponent.tsx': `
import { Skeleton, SkeletonLine } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <Skeleton className="mx-auto max-w-md space-y-2.5">
      <SkeletonLine className="h-52 w-full" />
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-3/5" />
      <SkeletonLine className="h-4 w-4/5" />
      <SkeletonLine className="h-10 w-2/5" />
    </Skeleton>
  )
}
`,
}

export { PostSkeleton, PostSkeletonCode }
