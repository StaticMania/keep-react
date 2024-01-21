import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { cn } from '../../helpers/cn'
import { BadgeColors, BadgeSizes, badgeTheme } from './theme'

export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'className' | 'color'>> {
  /**
   * The color of the badge.
   * @type {keyof BadgeColors}
   * @default 'info'
   */
  color?: keyof BadgeColors

  /**
   * The type of color for the badge.
   * @type {'light' | 'strong'}
   * @default 'strong'
   */
  colorType?: 'light' | 'strong'

  /**
   * The type of badge.
   * @type {'default' | 'outline' | 'text'}
   * @default 'default'
   */
  badgeType?: 'default' | 'outline' | 'text'

  /**
   * The URL to navigate to when the badge is clicked.
   * @type {string}
   * @default ''
   */
  href?: string

  /**
   * The icon to display within the badge.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode

  /**
   * The position of the icon within the badge.
   * @type {'left' | 'right'}
   * @default 'left'
   */
  iconPosition?: 'left' | 'right'

  /**
   * Additional CSS class name for the badge.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The size of the badge.
   * @type {keyof BadgeSizes}
   * @default 'xs'
   */
  size?: keyof BadgeSizes

  /**
   * The content of the badge.
   * @type {ReactNode}
   */
  children?: ReactNode

  /**
   * Whether to display a dot on the badge.
   * @type {boolean}
   * @default false
   */
  dot?: boolean

  /**
   * The position of the dot within the badge.
   * @type {'left' | 'right'}
   * @default 'left'
   */
  dotPosition?: 'left' | 'right'

  /**
   * Custom CSS style for the dot.
   * @type {string}
   * @default ''
   */
  dotStyle?: string

  /**
   * Custom CSS style for the icon.
   * @type {string}
   * @default ''
   */
  iconStyle?: string
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
  className,
  dotStyle,
  iconStyle,
  ...props
}): ReactElement => {
  const theirProps = excludeClassName(props)

  const theme = badgeTheme

  const Content = (): ReactElement => (
    <span
      className={cn(
        theme.base,
        theme.badgeType[badgeType].colorType[colorType].color[color],
        theme.icon[Icon ? 'on' : 'off'],
        theme.size[size],
        className,
      )}
      data-testid="keep-badge"
      {...theirProps}>
      {Icon && iconPosition === 'left' && <span className={cn(iconStyle)}>{Icon}</span>}
      {dot && dotPosition === 'left' && <div className={cn(theme.dot, theme.dotPosition.left, dotStyle)}></div>}
      {children && <span>{children}</span>}
      {dot && dotPosition === 'right' && <div className={cn(theme.dot, theme.dotPosition.right, dotStyle)}></div>}
      {Icon && iconPosition === 'right' && <span className={cn(iconStyle)}>{Icon}</span>}
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
