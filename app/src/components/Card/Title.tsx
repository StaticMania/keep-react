'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-heading-6 font-semibold text-metal-800 dark:text-white', className)} {...props} />
  ),
)
CardTitle.displayName = 'Card.Title'

export { CardTitle }
