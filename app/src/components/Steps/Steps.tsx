'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const Steps = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul className={cn('relative flex flex-col gap-2 md:flex-row', className)} {...props} ref={ref}>
        {children}
      </ul>
    )
  },
)

Steps.displayName = 'Steps'

export { Steps }
