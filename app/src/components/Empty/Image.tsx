'use client'
import { forwardRef, HTMLProps } from 'react'
import { cn } from '../../helpers/cn'

export const Image = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, ...props }, ref) => {
  return (
    <div {...props} ref={ref} className={cn(props.className)}>
      {children}
    </div>
  )
})

Image.displayName = 'Empty.Image'
