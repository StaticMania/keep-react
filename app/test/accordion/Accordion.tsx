'use client'
import React, { ComponentProps, FC, PropsWithChildren, ReactElement, useState } from 'react'
import { Title } from './Title'
import { Content } from './Content'
import { Panel, PanelProps } from './Panel'
import { cn } from '~/src/helpers/cn'
import { Icon } from './Icon'
import { Container } from './Container'

export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  children?: ReactElement<PanelProps> | ReactElement<PanelProps>[]
  className?: string
  activePanel?: number
}

export const AccordionComponent: FC<AccordionProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(0)

  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        state: {
          isOpen: isOpen === index ? -1 : 0,
          setIsOpen: () => setIsOpen(isOpen === index ? -1 : index),
        },
      })
    }
    return child
  })

  return <div className={cn(className)}>{modifiedChildren}</div>
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
