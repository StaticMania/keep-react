'use client'
import { ButtonHTMLAttributes, FC, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useAccordionContext } from './AccordionContext'
import { accordionTheme } from './theme'

export interface keepAccordionContainerTheme {
  base: string
  open: string
}

const Container: FC<ButtonHTMLAttributes<HTMLButtonElement>> = forwardRef(
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

Container.displayName = 'Accordion.Container'

export { Container }
