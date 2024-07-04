'use client'
import { HTMLProps, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const Empty = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn('mx-auto flex max-w-xl flex-col items-center justify-center p-6', className)}>
      {children}
    </div>
  )
})

Empty.displayName = 'Empty'

export { Empty }
