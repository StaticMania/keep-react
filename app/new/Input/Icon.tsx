'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface IconProps extends HTMLAttributes<HTMLDivElement> {}

export const Icon = forwardRef<HTMLDivElement, IconProps>(({ className, children, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        'pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50',
        className,
      )}>
      {children}
    </div>
  )
})

Icon.displayName = 'Icon'
