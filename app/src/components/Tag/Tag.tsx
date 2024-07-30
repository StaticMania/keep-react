'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  disabled?: boolean
  rounded?: boolean
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ children, className, disabled, rounded, ...props }, ref: Ref<HTMLSpanElement>) => {
    return (
      <span
        {...props}
        className={cn(
          'inline-flex cursor-pointer select-none items-center gap-1 border border-metal-100  bg-metal-50 px-2.5 py-1.5 text-body-4 font-medium text-metal-600 transition-all duration-300',
          disabled && 'cursor-not-allowed opacity-50',
          rounded ? 'rounded-full' : 'rounded-lg',
          className,
        )}
        ref={ref}>
        {children}
      </span>
    )
  },
)

Tag.displayName = 'Tag'

export { Tag }
