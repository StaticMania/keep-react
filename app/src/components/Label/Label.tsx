'use client'
import { LabelHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, children, ...props }, ref) => {
  return (
    <label
      ref={ref}
      {...props}
      className={cn('cursor-pointer select-none text-body-4 font-medium text-metal-600', className)}>
      {children}
    </label>
  )
})

Label.displayName = 'Label'
