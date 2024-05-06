'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { AvatarSizeVariant, avatarTheme } from './theme'

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  size?: keyof AvatarSizeVariant
}

const AvatarCounter = forwardRef<HTMLDivElement, CounterProps>(
  ({ children, className, size = 'xl', ...props }: CounterProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          avatarTheme.size[size],
          'bg-gradient-1 z-20 flex items-center justify-center rounded-full border-2 border-white text-body-4 font-semibold text-white',
          className,
        )}>
        {children}
      </div>
    )
  },
)

AvatarCounter.displayName = 'Avatar.Counter'

export { AvatarCounter }
