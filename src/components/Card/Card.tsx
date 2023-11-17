/* eslint-disable @next/next/no-img-element */
import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { CardContainer } from './CardContainer'
import { CardDescription } from './CardDescription'
import { CardLink } from './CardLink'
import { CardList } from './CardList'
import { CardTitle } from './CardTitle'
import { KeepBoolean, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'

/**
 * Interface for defining the theme of a KeepCard component.
 */
export interface KeepCardTheme {
  /** The base color of the card. */
  base: string
  /** The color of the card's children. */
  children: string
  /** Whether or not the card has a shadow. */
  shadow: KeepBoolean
  /** Whether or not the card has a border. */
  border: KeepBoolean
  /** Object containing the horizontal layout options for the card. */
  horizontal: {
    /** The horizontal layout when off. */
    off: string
    /** The horizontal layout when on. */
    on: string
  }
  /** The href for the card. */
  href: string
  /** Object containing the image options for the card. */
  img: {
    /** The base image for the card. */
    base: string
    /** Object containing the horizontal layout options for the card's background image when off. */
    horizontal: {
      /** The base image for the card's background image when off. */
      off: {
        /** The base image for the card's background image when off. */
        base: string
        /** The size of the card's background image when off. */
        size: CardBgImageSizes
      }
      /** Object containing the horizontal layout options for the card's background image when on. */
      on: {
        /** The base image for the card's background image when on. */
        base: string
        /** The size of the card's background image when on. */
        size: CardBgImageSizes
      }
    }
  }
  /** The description for the card. */
  description: string
}
/**
 * Defines an interface for the background image sizes of a card.
 * @interface CardBgImageSizes
 */
export interface CardBgImageSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

/**
 * Props for the Card component.
 * @interface CardProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */

export interface CardProps extends PropsWithChildren<ComponentProps<'div'>> {
  shadow?: boolean // shadow around card
  border?: boolean // border around card
  horizontal?: boolean // display card horizontally
  href?: string // link to when card is clicked
  imgAlt?: string // alt text for image
  imgSrc?: string // image source
  imgSize?: keyof CardBgImageSizes // size of image
}
const CardComponent: FC<CardProps> = ({
  children,
  className,
  shadow = false,
  border = true,
  horizontal,
  href,
  imgAlt,
  imgSrc,
  imgSize = 'lg',
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.card

  const Component = typeof href === 'undefined' ? 'div' : 'a'
  const theirProps = props as object
  return (
    <Component
      /**
       * Merges multiple tailwind classes into a single string.
       * @param classes - An array of tailwind classes to be merged.
       * @returns A string of merged tailwind classes.
       */
      className={twMerge(
        theme.base,
        href && theme.href,
        theme.shadow[shadow ? 'on' : 'off'],
        theme.border[border ? 'on' : 'off'],
        theme.horizontal[horizontal ? 'on' : 'off'],
        className,
      )}
      data-testid="keep-card"
      href={href}
      {...theirProps}>
      {imgSrc && (
        <img
          alt={imgAlt ?? ''}
          className={twMerge(
            theme.img.base,
            horizontal && theme.img.horizontal.on.base,
            horizontal && theme.img.horizontal.on.size[imgSize],
            !horizontal && theme.img.horizontal.off.base,
            !horizontal && theme.img.horizontal.off.size[imgSize],
          )}
          src={imgSrc}
        />
      )}
      <div className={theme.children}>{children}</div>
    </Component>
  )
}

CardComponent.displayName = 'Card'
CardTitle.displayName = 'Card.Title'
CardDescription.displayName = 'Card.Description'
CardLink.displayName = 'Card.Link'
CardContainer.displayName = 'Card.Container'
CardList.displayName = 'Card.List'

export const Card = Object.assign(CardComponent, {
  Title: CardTitle,
  Description: CardDescription,
  Link: CardLink,
  List: CardList,
  Container: CardContainer,
})
