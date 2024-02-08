'use client'
import { Children, FC, ReactElement, cloneElement, isValidElement, useState } from 'react'
import { cn } from '../../helpers/cn'
import { Container, keepAccordionContainerTheme } from './Container'
import { Content, keepAccordionContentTheme } from './Content'
import { Icon, keepAccordionIconTheme } from './Icon'
import { Panel, PanelProps, keepAccordionPanelTheme } from './Panel'
import { Title, keepAccordionTitleTheme } from './Title'

export interface AccordionProps {
  children?: ReactElement<PanelProps> | ReactElement<PanelProps>[]
  className?: string
  flush?: boolean
  disabled?: boolean
  openFirstPanel?: boolean
  [key: string]: any
}

export interface keepAccordionTheme {
  container: keepAccordionContainerTheme
  content: keepAccordionContentTheme
  icon: keepAccordionIconTheme
  panel: keepAccordionPanelTheme
  title: keepAccordionTitleTheme
}

export const AccordionComponent: FC<AccordionProps> = ({
  children,
  className,
  flush,
  disabled = false,
  openFirstPanel,
  ...otherProps
}) => {
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
    <section
      aria-labelledby="accordion"
      {...otherProps}
      className={cn(disabled && 'pointer-events-none opacity-50', className)}>
      {modifiedChildren}
    </section>
  )
}

Title.displayName = 'Accordion.Title'
Content.displayName = 'Accordion.Content'
Panel.displayName = 'Accordion.Panel'
Icon.displayName = 'Accordion.Icon'
Container.displayName = 'Accordion.Container'

export const Accordion = Object.assign(AccordionComponent, {
  Title,
  Content,
  Panel,
  Icon,
  Container,
})
