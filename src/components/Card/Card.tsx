/* eslint-disable @next/next/no-img-element */
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { CardContainer } from './CardContainer'
import { CardDescription } from './CardDescription'
import { CardLink } from './CardLink'
import { CardList } from './CardList'
import { CardTitle } from './CardTitle'
import { KeepBoolean, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface KeepCardTheme {
  base: string
  children: string
  shadow: KeepBoolean
  border: KeepBoolean
  horizontal: {
    off: string
    on: string
  }
  href: string
  img: {
    base: string
    horizontal: {
      off: {
        base: string
        size: CardBgImageSizes
      }
      on: {
        base: string
        size: CardBgImageSizes
      }
    }
  }
  description: string
}

export interface CardBgImageSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

/**
 * Props for the Card component.
 * @interface CardProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */

export interface CardProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Determines whether the card has a shadow.
   */
  shadow?: boolean

  /**
   * Determines whether the card has a border.
   */
  border?: boolean

  /**
   * Determines whether the card is displayed horizontally.
   */
  horizontal?: boolean

  /**
   * The URL for the card's hyperlink.
   */
  href?: string

  /**
   * The alternate text for the card's image.
   */
  imgAlt?: string

  /**
   * The source URL for the card's image.
   */
  imgSrc?: string

  /**
   * The size of the card's background image.
   */
  imgSize?: keyof CardBgImageSizes

  /**
   * The custom CSS style for the card's image.
   */
  imgStyle?: string
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
  imgStyle,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.card

  const Component = typeof href === 'undefined' ? 'div' : 'a'
  const theirProps = props as object
  return (
    <Component
      className={cn(
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
          className={cn(
            theme.img.base,
            horizontal && theme.img.horizontal.on.base,
            horizontal && theme.img.horizontal.on.size[imgSize],
            !horizontal && theme.img.horizontal.off.base,
            !horizontal && theme.img.horizontal.off.size[imgSize],
            imgStyle,
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
