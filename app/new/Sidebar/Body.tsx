'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface BodyProps extends HTMLAttributes<HTMLDivElement> {}

export const Body = forwardRef<HTMLDivElement, BodyProps>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn('text-body-3 font-medium text-metal-600', className)}>
      {children}
    </div>
  )
})

Body.displayName = 'Sidebar.Body'
