'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const Body = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...otherProps }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...otherProps} className={cn(className)} ref={ref}>
        {children}
      </div>
    )
  },
)

Body.displayName = 'Alert.Body'

export { Body }
