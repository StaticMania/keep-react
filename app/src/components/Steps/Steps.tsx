'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const Steps = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn('relative mx-auto flex w-full items-center justify-between gap-x-5', className)}>
      {children}
    </div>
  )
})

Steps.displayName = 'Steps'

export { Steps }
