'use client'
import { Children, HTMLAttributes, ReactElement, Ref, cloneElement, forwardRef, isValidElement, useState } from 'react'
import { cn } from '../../helpers/cn'
import { AccordionContainer, keepAccordionContainerTheme } from './Container'
import { AccordionContent, keepAccordionContentTheme } from './Content'
import { AccordionIcon, keepAccordionIconTheme } from './Icon'
import { AccordionPanel, keepAccordionPanelTheme } from './Panel'
import { AccordionTitle, keepAccordionTitleTheme } from './Title'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement<{ [key: string]: any }> | ReactElement<{ [key: string]: any }>[]
  flush?: boolean
  disabled?: boolean
  openFirstPanel?: boolean
}

export interface keepAccordionTheme {
  container: keepAccordionContainerTheme
  content: keepAccordionContentTheme
  icon: keepAccordionIconTheme
  panel: keepAccordionPanelTheme
  title: keepAccordionTitleTheme
}

const AccordionComponent = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { children, className, flush, disabled = false, openFirstPanel, ...otherProps }: AccordionProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const [isOpen, setIsOpen] = useState(openFirstPanel ? 0 : -1)

    const modifiedChildren = Children.map(children, (child, index) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          state: {
            isOpen: isOpen === index ? -1 : 0,
            setIsOpen: () => setIsOpen(isOpen === index ? -1 : index),
            flush,
          },
        })
      }
      return child
    })

    return (
      <div
        aria-labelledby="accordion"
        {...otherProps}
        className={cn(disabled && 'pointer-events-none opacity-50', className)}
        ref={ref}>
        {modifiedChildren}
      </div>
    )
  },
)

AccordionComponent.displayName = 'Accordion'

const Accordion = Object.assign(AccordionComponent, {
  Title: AccordionTitle,
  Content: AccordionContent,
  Panel: AccordionPanel,
  Icon: AccordionIcon,
  Container: AccordionContainer,
})

export { Accordion }
