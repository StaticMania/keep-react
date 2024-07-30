'use client'
import { HTMLAttributes, Ref, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../utils/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface keepAccordionIconTheme {
  base: string
  rotated: {
    full: string
    half: string
  }
}

export interface AccordionIconProps extends HTMLAttributes<HTMLSpanElement> {
  asChild?: boolean
}

const AccordionIcon = forwardRef<HTMLSpanElement, AccordionIconProps>(
  ({ children, asChild, className, ...otherProps }, ref: Ref<HTMLSpanElement>) => {
    const { isOpen } = useAccordionContext()
    const { icon } = accordionTheme

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...otherProps,
      })
    }

    return (
      <span
        {...otherProps}
        className={cn(icon.base, isOpen ? icon.rotated.full : icon.rotated.half, className)}
        ref={ref}>
        {children ?? (
          <svg
            className="shrink-0 fill-metal-600 dark:fill-metal-300"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg">
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

AccordionIcon.displayName = 'AccordionIcon'

export { AccordionIcon }
