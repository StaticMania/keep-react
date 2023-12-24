'use client'
import { Children, FC, ReactElement, cloneElement, isValidElement, useState } from 'react'
import { Title, keepAccordionTitleTheme } from './Title'
import { Content, keepAccordionContentTheme } from './Content'
import { Panel, PanelProps, keepAccordionPanelTheme } from './Panel'
import { cn } from '../../helpers/cn'
import { Icon, keepAccordionIconTheme } from './Icon'
import { Container, keepAccordionContainerTheme } from './Container'

/**
 * Props for the Accordion component.
 * @interface AccordionProps
 * @extends {PanelProps}
 */
export interface AccordionProps {
  /**
   * The content of the Accordion component.
   * @type {ReactElement<PanelProps> | ReactElement<PanelProps>[]}
   */
  children?: ReactElement<PanelProps> | ReactElement<PanelProps>[]
  /**
   * Additional class name for the Accordion component.
   * @type {string}
   * @default ''
   */
  className?: string
  /**
   * Determines if the Accordion component should have flush style.
   * @type {boolean}
   * @default false
   */
  flush?: boolean
  /**
   * Determines if the Accordion component is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean
  /**
   * Determines if the first panel of the Accordion component should be open by default.
   * @type {boolean}
   * @default false
   */
  openFirstPanel?: boolean
  /**
   * Additional props for the Accordion component.
   * @type {any}
   */
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
    <div
      role="region"
      aria-labelledby="accordion"
      {...otherProps}
      className={cn(className, disabled && 'pointer-events-none opacity-50')}>
      {modifiedChildren}
    </div>
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
