'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const AvatarGroup = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref: Ref<HTMLDivElement>) => {
  return (
    <div ref={ref} {...props} className={cn('flex items-center -space-x-3', props.className)}>
      {props.children}
    </div>
  )
})

AvatarGroup.displayName = 'Avatar.Group'

export { AvatarGroup }
