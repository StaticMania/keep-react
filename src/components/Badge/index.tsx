import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { KeepColors, KeepSizes } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'

/**
 * Interface for defining the theme of a Keep badge
 */
export interface keepBadgeTheme {
  /**
   * A string representing the base of the badge
   */
  base: string
  /**
   * A string representing the href of the badge
   */
  href: string
  /**
   * An object representing the badge type
   */
  badgeType: {
    /**
     * An object representing the color type of the badge
     * @type {object} 
     * 
     * default - An object representing the default color type of the badge
     * outline - An object representing the outline color type of the badge
     * text - An object representing the text color type of the badge
     *  
     * light - An object representing the light color type of the badge
     * strong - An object representing the strong color type of the badge
     * 
     */
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
  /**
   * An object representing the icon of the badge
   */
  icon: {
    off: string
    on: string
    size: BadgeSizes
  }
  /**
   * An object representing the size of the badge
   */
  size: BadgeSizes
  /**
   * A string representing the dot of the badge
   */
  dot: string

  /**
   * An object representing the position of the dot of the badge
   */
  dotPosition: { 
    /**
     * A string representing the left position of the dot
     */
    left: string 
    /**
     * A string representing the right position of the dot
     */
    right: string 
  }
}

// Define an interface 'BadgeProps' that extends 'PropsWithChildren' with the properties of a 'span' HTML element, excluding 'className' and 'color'
export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'className' | 'color'>> {
  /**
   *  Define an optional property 'color' that can be a key of 'BadgeColors'
   */
  color?: keyof BadgeColors
  /**
   *  Define an optional property 'colorType' that can be either 'light' or 'strong'
   */
  colorType?: 'light' | 'strong'
  /**
   *  Define an optional property 'badgeType' that can be either 'default', 'outline', or 'text'
   */
  badgeType?: 'default' | 'outline' | 'text'
  /**
   *  Define an optional property 'href' of type string
   */
  href?: string
  /**
   *  Define an optional property 'icon' of type 'ReactNode'
   */
  icon?: ReactNode
  /**
   *  Define an optional property 'iconPosition' that can be either 'left' or 'right'
   */
  iconPosition?: 'left' | 'right'
  /**
   *  Define an optional property 'className' of type string
   */
  className?: string
  /**
   *  Define an optional property 'size' that can be a key of 'BadgeSizes'
   */
  size?: keyof BadgeSizes
  /**
   *  Define an optional property 'children' of type 'ReactNode'
   */
  children?: ReactNode
  /**
   *  Define an optional property 'dot' of type boolean
   */
  dot?: boolean
  /**
   *  Define an optional property 'dotPosition' that can be either 'left' or 'right'
   */
  dotPosition?: 'left' | 'right'
}

/**
 * Interface for defining custom badge colors.
 * @interface BadgeColors
 * 
 * error - A string representing the error color of the badge
 * gray - A string representing the gray color of the badge
 * info - A string representing the info color of the badge
 * success - A string representing the success color of the badge
 * warning - A string representing the warning color of the badge
 * [key: string] - A string representing the custom color of the badge
 */

export interface BadgeColors extends Pick<KeepColors, 'error' | 'gray' | 'info' | 'success' | 'warning'> {
  [key: string]: string
}

/**
 * Interface for defining custom badge sizes.
 * @interface BadgeSizes
 * 
 * xs - A string representing the extra small size of the badge
 * sm - A string representing the small size of the badge
 * [key: string] - A string representing the custom size of the badge
 */
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
