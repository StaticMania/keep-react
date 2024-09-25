import { Skeleton, SkeletonLine } from '../../../../src'

const PostSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine className="h-52 w-full" />
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-4 w-3/5" />
        <SkeletonLine className="h-4 w-4/5" />
        <SkeletonLine className="h-10 w-2/5" />
      </Skeleton>
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine className="h-52 w-full" />
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-4 w-3/5" />
        <SkeletonLine className="h-4 w-4/5" />
        <SkeletonLine className="h-10 w-2/5" />
      </Skeleton>
    </div>
  )
}

const PostSkeletonCode = {
  'SkeletonComponent.tsx': `
import { Skeleton, SkeletonLine } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine className="h-52 w-full" />
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-4 w-3/5" />
        <SkeletonLine className="h-4 w-4/5" />
        <SkeletonLine className="h-10 w-2/5" />
      </Skeleton>
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine className="h-52 w-full" />
        <SkeletonLine className="h-4 w-full" />
        <SkeletonLine className="h-4 w-3/5" />
        <SkeletonLine className="h-4 w-4/5" />
        <SkeletonLine className="h-10 w-2/5" />
      </Skeleton>
    </div>
  )
}
`,
}

export { PostSkeleton, PostSkeletonCode }
