'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => (
    <div {...props} className={cn(className)} ref={ref}>
      {children}
    </div>
  ),
)

Header.displayName = 'Card.Header'

export { Header }
