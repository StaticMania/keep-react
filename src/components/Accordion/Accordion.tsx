'use client'
import { Children, FC, ReactElement, cloneElement, isValidElement, useState } from 'react'
import { Title, keepAccordionTitleTheme } from './Title'
import { Content, keepAccordionContentTheme } from './Content'
import { Panel, PanelProps, keepAccordionPanelTheme } from './Panel'
import { cn } from '../../helpers/cn'
import { Icon, keepAccordionIconTheme } from './Icon'
import { Container, keepAccordionContainerTheme } from './Container'

export interface AccordionProps {
  children?: ReactElement<PanelProps> | ReactElement<PanelProps>[]
  className?: string
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

export const AccordionComponent: FC<AccordionProps> = ({
  children,
  className,
  flush,
  disabled = false,
  openFirstPanel,
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

  return <div className={cn(className, disabled && 'pointer-events-none opacity-50')}>{modifiedChildren}</div>
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
