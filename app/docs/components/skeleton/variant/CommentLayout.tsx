'use client'
import { Skeleton } from '../../../../src'

const CommentLayout = () => {
  return (
    <Skeleton className="flex max-w-md items-center gap-3">
      <Skeleton.Line height="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton.Line height="h-4 w-[250px]" />
        <Skeleton.Line height="h-4 w-[200px]" />
      </div>
    </Skeleton>
  )
}

const CommentLayoutCode = `
'use client'
import { Skeleton } from 'keep-react'

export const SkeletonComponent = () => {
  return (
    <Skeleton className="flex max-w-md items-center gap-3">
      <Skeleton.Line height="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton.Line height="h-4 w-[250px]" />
        <Skeleton.Line height="h-4 w-[200px]" />
      </div>
    </Skeleton>
  )
}
`

export { CommentLayout, CommentLayoutCode }
