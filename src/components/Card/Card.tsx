/* eslint-disable @next/next/no-img-element */
import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { CardContainer } from './CardContainer'
import { CardDescription } from './CardDescription'
import { CardLink } from './CardLink'
import { CardList } from './CardList'
import { CardTitle } from './CardTitle'
import { KeepBoolean, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'

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
}
export interface CardBgImageSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}
export interface CardProps extends PropsWithChildren<ComponentProps<'div'>> {
  shadow?: boolean
  border?: boolean
  horizontal?: boolean
  href?: string
  imgAlt?: string
  imgSrc?: string
  imgSize?: keyof CardBgImageSizes
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
