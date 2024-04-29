'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { accordionTheme } from './theme'

export interface keepAccordionTitleTheme {
  base: string
}

const AccordionTitle = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ children, ...props }, ref: Ref<HTMLSpanElement>) => {
    const { title } = accordionTheme
    return (
      <span {...props} className={cn(title.base, props.className)} ref={ref}>
        {children}
      </span>
    )
  },
)

AccordionTitle.displayName = 'Accordion.Title'

export { AccordionTitle }
