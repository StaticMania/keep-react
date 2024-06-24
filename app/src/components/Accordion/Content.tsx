'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { Collapse } from 'react-collapse'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface keepAccordionContentTheme {
  base: string
}

const AccordionContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...otherProps }: HTMLAttributes<HTMLDivElement>, ref: Ref<HTMLDivElement>) => {
    const { isOpen = false } = useAccordionContext()
    const { content } = accordionTheme
    return (
      <Collapse isOpened={isOpen}>
        <div {...otherProps} className={cn(content.base, className)} ref={ref}>
          {children}
        </div>
      </Collapse>
    )
  },
)

AccordionContent.displayName = 'Accordion.Content'

export { AccordionContent }
