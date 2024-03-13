'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { accordionTheme } from './theme'

export interface keepAccordionTitleTheme {
  base: string
}

const Title = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ children, ...props }, ref: Ref<HTMLSpanElement>) => {
    const { title } = accordionTheme
    return (
      <span {...props} className={cn(title.base, props.className)} ref={ref}>
        {children}
      </span>
    )
  },
)

Title.displayName = 'Accordion.Title'

export { Title }
