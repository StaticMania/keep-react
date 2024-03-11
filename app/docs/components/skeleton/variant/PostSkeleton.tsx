'use client'
import { Skeleton } from '../../../../src'

const PostSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
    </div>
  )
}

const PostSkeletonCode = `
'use client'
import { Skeleton } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
      <Skeleton className="w-full space-y-2.5 xl:max-w-md">
        <Skeleton.Line className="h-52 w-full" />
        <Skeleton.Line className="h-4 w-full" />
        <Skeleton.Line className="h-4 w-3/5" />
        <Skeleton.Line className="h-4 w-4/5" />
        <Skeleton.Line className="h-10 w-2/5" />
      </Skeleton>
    </div>
  )
}
`

export { PostSkeleton, PostSkeletonCode }
