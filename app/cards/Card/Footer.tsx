'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(className)} ref={ref}>
        {children}
      </div>
    )
  },
)

Footer.displayName = 'Card.Footer'

export { Footer }
