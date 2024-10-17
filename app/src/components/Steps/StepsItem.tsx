'use client'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

const StepsItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(({ children, className, ...props }, ref) => {
  return (
    <li className={cn('group flex flex-1 gap-x-2 md:block md:shrink md:basis-0', className)} {...props} ref={ref}>
      {children}
    </li>
  )
})

StepsItem.displayName = 'StepsItem'

export { StepsItem }
