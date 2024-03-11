'use client'
import { Skeleton } from '../../../../src'

const DefaultSkeleton = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-10 w-2/5" />
    </Skeleton>
  )
}

const DefaultSkeletonCode = `
'use client'
import { Skeleton } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <Skeleton className="max-w-xl space-y-2.5">
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-full" />
      <Skeleton.Line className="h-4 w-3/5" />
      <Skeleton.Line className="h-4 w-4/5" />
      <Skeleton.Line className="h-10 w-2/5" />
    </Skeleton>
  )
}
`

export { DefaultSkeleton, DefaultSkeletonCode }
