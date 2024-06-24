'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const AlertBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...otherProps }, ref: Ref<HTMLDivElement>) => {
    return (
      <div {...otherProps} className={cn(className)} ref={ref}>
        {children}
      </div>
    )
  },
)

AlertBody.displayName = 'Alert.Body'

export { AlertBody }
