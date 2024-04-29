import { Skeleton, SkeletonLine } from '../../../../src'

const CommentLayout = () => {
  return (
    <Skeleton className="flex max-w-md items-center gap-3">
      <SkeletonLine className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <SkeletonLine className="h-4 w-[250px]" />
        <SkeletonLine className="h-4 w-[200px]" />
      </div>
    </Skeleton>
  )
}

const CommentLayoutCode = `
import { Skeleton, SkeletonLine } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <Skeleton className="flex max-w-md items-center gap-3">
      <SkeletonLine className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <SkeletonLine className="h-4 w-[250px]" />
        <SkeletonLine className="h-4 w-[200px]" />
      </div>
    </Skeleton>
  )
}
`

export { CommentLayout, CommentLayoutCode }
