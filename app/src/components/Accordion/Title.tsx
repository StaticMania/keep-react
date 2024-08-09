'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { accordionTheme } from './theme'

export interface keepAccordionTitleTheme {
  base: string
}

const AccordionTitle = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLSpanElement>) => {
    const { title } = accordionTheme
    return (
      <span {...props} className={cn(title.base, className)} ref={ref}>
        {children}
      </span>
    )
  },
)

AccordionTitle.displayName = 'AccordionTitle'

export { AccordionTitle }
