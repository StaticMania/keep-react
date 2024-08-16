'use client'
import { ButtonHTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface keepAccordionContainerTheme {
  base: string
  open: string
}

const AccordionContainer = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...otherProps }, ref: Ref<HTMLButtonElement>) => {
    const { isOpen, setIsOpen } = useAccordionContext()
    const { container } = accordionTheme
    return (
      <button
        tabIndex={0}
        {...otherProps}
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
        className={cn(container.base, className)}
        ref={ref}>
        {children}
      </button>
    )
  },
)

AccordionContainer.displayName = 'AccordionContainer'

export { AccordionContainer }
