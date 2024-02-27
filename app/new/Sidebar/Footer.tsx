'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '~/app/src/helpers/cn'

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn(className)}>
      {children}
    </div>
  )
})

Footer.displayName = 'Sidebar.Footer'
