'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface keepAccordionIconTheme {
  base: string
  rotated: {
    full: string
    half: string
  }
}

const Icon = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ children, className, ...otherProps }: HTMLAttributes<HTMLSpanElement>, ref: Ref<HTMLSpanElement>) => {
    const { isOpen } = useAccordionContext()
    const { icon } = accordionTheme
    return (
      <span
        {...otherProps}
        className={cn(icon.base, children && (isOpen ? icon.rotated.full : icon.rotated.half), className)}
        ref={ref}>
        {children ?? (
          <svg className="shrink-0 fill-metal-300" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center transform transition duration-150 ease-out ${isOpen && '!rotate-180'}`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-150 ease-out ${isOpen && '!rotate-180'}`}
            />
          </svg>
        )}
      </span>
    )
  },
)

Icon.displayName = 'Accordion.Icon'

export { Icon }
