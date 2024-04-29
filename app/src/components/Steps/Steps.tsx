'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const Steps = forwardRef<HTMLUListElement, HTMLProps<HTMLUListElement>>(({ className, children, ...props }, ref) => {
  return (
    <ul {...props} ref={ref} className={cn('relative flex max-w-5xl flex-col gap-2 md:flex-row', className)}>
      {children}
    </ul>
  )
})
Steps.displayName = 'Steps'

export { Steps }
