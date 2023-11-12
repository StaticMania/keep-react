import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'

export interface keepBadgeTheme {
  base: string
  href: string
  badgeType: {
    default: {
      colorType: {
        light: {
          color: BadgeColors
        }
        strong: {
          color: BadgeColors
        }
      }
    }
    outline: {
      colorType: {
        light: {
          color: BadgeColors
        }
        strong: {
          color: BadgeColors
        }
      }
    }
    text: {
      colorType: {
        light: {
          color: BadgeColors
        }
        strong: {
          color: BadgeColors
        }
      }
    }
  }
  icon: {
    off: string
    on: string
    size: BadgeSizes
  }

  size: BadgeSizes
  dot: string
  dotPosition: { left: string; right: string }
}

export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'className' | 'color'>> {
  color?: keyof BadgeColors
  colorType?: 'light' | 'strong'
  badgeType?: 'default' | 'outline' | 'text'
  href?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  size?: keyof BadgeSizes
  children?: ReactNode
  dot?: boolean
  dotPosition?: 'left' | 'right'
}

export interface BadgeColors extends Pick<KeepColors, 'error' | 'gray' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}

export interface BadgeSizes extends Pick<KeepSizes, 'xs' | 'sm'> {
  [key: string]: string
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  colorType = 'strong',
  badgeType = 'default',
  href,
  icon: Icon,
  iconPosition = 'left',
  size = 'xs',
  dot = false,
  dotPosition = 'left',
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props)

  const theme = useTheme().theme.badge

  const Content = (): JSX.Element => (
    <span
      className={twMerge(
        theme.base,
        theme.badgeType[badgeType].colorType[colorType].color[color],
        theme.icon[Icon ? 'on' : 'off'],
        theme.size[size],
      )}
      data-testid="keep-badge"
      {...theirProps}>
      {Icon && iconPosition === 'left' && <span>{Icon}</span>}
      {dot && dotPosition === 'left' && <div className={twMerge(theme.dot, theme.dotPosition.left)}></div>}
      {children && <span>{children}</span>}
      {dot && dotPosition === 'right' && <div className={twMerge(theme.dot, theme.dotPosition.right)}></div>}
      {Icon && iconPosition === 'right' && <span>{Icon}</span>}
    </span>
  )

  return href ? (
    <a className={theme.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  )
}
