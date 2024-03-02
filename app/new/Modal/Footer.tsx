'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { modalTheme } from './theme'

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(modalTheme.footer, className)} ref={ref}>
        {children}
      </div>
    )
  },
)

Footer.displayName = 'Modal.Footer'

export { Footer }
