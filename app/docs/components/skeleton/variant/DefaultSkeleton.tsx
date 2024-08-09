import { Skeleton, SkeletonLine } from '../../../../src'

const DefaultSkeleton = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-3/5" />
      <SkeletonLine className="h-4 w-4/5" />
      <SkeletonLine className="h-10 w-2/5" />
    </Skeleton>
  )
}

const DefaultSkeletonCode = {
  'SkeletonComponent.tsx': `
import { Skeleton, SkeletonLine } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-full" />
      <SkeletonLine className="h-4 w-3/5" />
      <SkeletonLine className="h-4 w-4/5" />
      <SkeletonLine className="h-10 w-2/5" />
    </Skeleton>
  )
}
`,
}

export { DefaultSkeleton, DefaultSkeletonCode }
