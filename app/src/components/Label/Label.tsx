'use client'
import { LabelHTMLAttributes, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  asChild?: boolean
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, children, asChild, ...props }, ref) => {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      itemRef: ref,
      ...props,
    })
  }

  return (
    <label
      ref={ref}
      {...props}
      className={cn(
        'inline cursor-pointer select-none text-body-4 font-medium text-metal-600 dark:text-metal-300',
        className,
      )}>
      {children}
    </label>
  )
})

Label.displayName = 'Label'
