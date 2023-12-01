import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'
import { Container } from './Container'
import { Title } from './Title'
import { Body } from './Body'
import { Avatar } from './Avatar'
import { Icon } from './Icon'
import { Description } from './Description'
import { Link } from './Link'

interface CardProps {
  className?: string
  children?: ReactNode
}

export const CardComponent: FC<CardProps> = ({ className, children }) => {
  return (
    <figure className={cn('max-w-lg rounded-md border border-metal-50 bg-white p-6 shadow-small', className)}>
      {children}
    </figure>
  )
}

Container.displayName = 'Card.Container'
Title.displayName = 'Card.Title'
Body.displayName = 'Card.Body'
Avatar.displayName = 'Card.Avatar'
Icon.displayName = 'Card.Icon'
Description.displayName = 'Card.Description'
Link.displayName = 'Card.Link'

export const Card = Object.assign(CardComponent, {
  Container,
  Title,
  Body,
  Avatar,
  Icon,
  Description,
  Link,
})
