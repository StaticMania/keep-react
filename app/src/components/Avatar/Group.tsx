'use client'
import { FC, HTMLAttributes, Ref, forwardRef } from 'react'

const Group: FC<HTMLAttributes<HTMLDivElement>> = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} {...props} className="flex items-center -space-x-3">
        {props.children}
      </div>
    )
  },
)

Group.displayName = 'Avatar.Group'

export { Group }
