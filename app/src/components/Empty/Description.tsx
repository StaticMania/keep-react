'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../helpers/cn'
import { emptyTheme } from './theme'

export const Description = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => {
    const { description } = emptyTheme
    return (
      <p {...props} ref={ref} className={cn(description.base, props.className)}>
        {children}
      </p>
    )
  },
)

Description.displayName = 'Empty.Description'
