'use client'
import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  isFileExists?: boolean
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, isFileExists = false, ...props }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...props} className={cn(className)} ref={ref}>
        {isFileExists ? children : null}
      </div>
    )
  },
)

Footer.displayName = 'Upload.Footer'

export { Footer }
