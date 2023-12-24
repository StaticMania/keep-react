import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
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
   * @type {boolean}
   * @default false
   */
  shadow?: boolean

  /**
   * Determines whether the card has a border.
   * @type {boolean}
   * @default true
   */
  border?: boolean

  /**
   * Determines whether the card is displayed horizontally.
   * @type {boolean}
   * @default false
   */
  horizontal?: boolean

  /**
   * The URL for the card's hyperlink.
   * @type {string}
   */
  href?: string

  /**
   * The alternate text for the card's image.
   * @type {string}
   * @default ''
   */
  imgAlt?: string

  /**
   * The source URL for the card's image.
   * @type {string}
   * @default ''
   */
  imgSrc?: string

  /**
   * The size of the card's background image.
   * @type {keyof CardBgImageSizes}
   * @default 'lg'
   */
  imgSize?: keyof CardBgImageSizes

  /**
   * The custom CSS style for the card's image.
   * @type {string}
   * @default ''
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
}): ReactElement => {
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
