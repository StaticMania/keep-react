'use client'
import { FC, HTMLAttributes, Ref, forwardRef } from 'react'
import { Collapse } from 'react-collapse'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface keepAccordionContentTheme {
  base: string
}

const Content: FC<HTMLAttributes<HTMLDivElement>> = forwardRef(
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

Content.displayName = 'Accordion.Content'

export { Content }
