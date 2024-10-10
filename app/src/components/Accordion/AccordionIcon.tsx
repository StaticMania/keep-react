'use client'
import { cloneElement, forwardRef, HTMLAttributes, isValidElement, Ref } from 'react'
import { cn } from '../../utils/cn'

type AccordionIconProps = HTMLAttributes<HTMLSpanElement> & {
  asChild?: boolean
}

const AccordionIcon = forwardRef<HTMLSpanElement, AccordionIconProps>(
  ({ children, asChild, className, ...otherProps }, ref: Ref<HTMLSpanElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...otherProps,
      })
    }

    return (
      <span {...otherProps} className={cn(className)} ref={ref}>
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
              className={`origin-center transform transition duration-150 ease-out`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-150 ease-out`}
            />
          </svg>
        )}
      </span>
    )
  },
)

AccordionIcon.displayName = 'AccordionIcon'

export { AccordionIcon, type AccordionIconProps }
